import express from "express";
import dotEnv from "dotenv";
import jwt from "jsonwebtoken";

dotEnv.config();
const router = express.Router();
import { con } from "../config/database.js";
import { validationResult } from "express-validator";
import { checkUserExist } from "./group_controller.js";
import { createNotif } from "./notif_controller.js";


export const checkCommentExist = async (comment_id) => {

  const comments = con
    .select('*')
    .from('comments')
    .where('id', comment_id);

  return !(comments.length === 0)



}

export const checkCommentAlreadyLiked = async (comment_id, user_id) => {

  const likeComment = await con
    .select('*')
    .from('comment-likes')
    .where({
      comment_id,
      user_id
    })

  return !(likeComment.length === 0)


}

export const checkCommentOwner = async (comment_id, user_id) => {

  const owner_id = await con
    .select('user_id')
    .from('comment-likes')
    .where({ user_id, comment_id })

  return !(owner_id.length === 0)
}



export const getComments = async (req, res) => {
  await con.select("*").from("comments").then((data) => {
    res.status(200).json({
      status: "success",
      data: data,
    });
  });
};


export const getCommentsWithLimits = async (req, res) => {
  const { page } = req.query;
  const start = parseInt(page) * 5;
  console.log(start);
  await con
    .select("*")
    .from("comments")
    .where("post_id", req.params.id)
    .limit(7)
    .offset(start)
    .then((comments) => {
      return res.status(200).json(comments);
    })
    .catch((err) => res.status(400).json({
      error: err,
    }));
};

export const getComment = async (req, res) => {
  const { id } = req.params;
  await con
    .select("*")
    .from("comments")
    .where("id", id)
    .then((comment) => {
      return res.status(200).json(comment);
    })
    .catch((err) => res.status(400).json({
      error: err,
    }));
};

export const addComment = async (req, res) => {
  const { comment, user_id, post_id } = req.body;

  // error check
  const { errors } = validationResult(req);
  if (!(errors.length === 0)) {
    return res.status(400).json({
      success: false,
      errors
    })
  }
  try {



    const newComment = { comment, user_id, post_id };

    await con
      .insert(newComment)
      .into("comments");

    await createNotif(null, user_id, post_id, "c", null);


    return res.status(200).json({
      message: "Comment added successfully",
    });

  } catch (error) {
    return res.status(400).json({
      message: err,
    })
  }

};


export const updateComment = async (req, res) => {
  const { id } = req.params;
  const { comment } = req.body;
  const updatedComment = { comment };

  // check user is the owner of comment
  const user_id = req.user.id;
  const comment_owner = await checkCommentOwner(id, user_id);

  if (comment_owner) {
    return res.status(400).json({
      success: false,
      error: 'User not able to update this comment'
    })

  }

  await con
    .update(updatedComment)
    .from("comments")
    .where("id", id)
    .then(() => {
      return res.status(200).json({
        success: true,
        message: "Comment updated successfully",
      })
    })
    .catch((err) => res.status(400).json({
      success: false,
      message: err,
    }));
}


export const deleteComment = async (req, res) => {
  const { id } = req.params;
  await con
    .delete()
    .from("comments")
    .where("id", id)
    .then(() => {
      return res.status(201).json({
        message: "Comment deleted successfully",
      })
    })
    .catch((err) => res.status(400).json({
      message: err,
    }));
};


export const likeComment = async (req, res) => {
  // check body errors

  const { errors } = validationResult(req);
  if (!(errors.length === 0)) {

    return res.status(400).json({
      success: false,
      errors
    })
  }

  const { comment_id, user_id } = req.body;

  const user_exist = await checkUserExist(user_id);
  if (!user_exist) {
    return res.status(404).json({
      success: false,
      error: 'User does\'nt exist!'
    })

  }

  const comment_exist = await checkCommentExist(comment_id);
  if (!comment_exist) {
    return res.status(404).json({
      success: false,
      error: 'Comment does\'nt exist!'
    })

  }

  const alreadyLiked = await checkCommentAlreadyLiked(comment_id, user_id);
  if (alreadyLiked) {
    //  dislike == remove
    try {
      await con
        .delete()
        .from('comment-likes')
        .where({
          user_id,
          comment_id
        })

      return res.status(200).json({
        success: true,
        message: 'Comment disliked successfully!'
      })

    } catch (error) {
      return res.status(400).json({
        success: false,
        error
      })
    }
  }

  // like == insert
  await con
    .insert({
      user_id,
      comment_id
    })
    .into("comment-likes")
    .then((data) => {


      return res.status(201).json({
        success: true,
        message: "Comment liked successfully",
      })

    })
    .catch((err) => res.status(400).json({
      success: false,
      error: err
    }));

};

export const unlikeComment = async (req, res) => {
  const { id } = req.params;

  await con
    .select("*")
    .from("comments")
    .where("id", id)
    .then((comment) => {
      const likes = comment[0].likes - 1;
      const updatedComment = { likes };
      con
        .update(updatedComment)
        .from("comments")
        .where("id", id)
        .then(() => {
          return res.status(200).json({
            message: "Comment liked successfully",
          })
        })
        .catch((err) => res.status(400).json({
          message: err,
        }));
    })
    .catch((err) => res.status(400).json({
      message: err,
    }));
};


export const getPostComments = async (req, res) => {

  const { id } = req.params;
  await con
    .select("*")
    .from("comments")
    .where("post_id", id)
    .then((comments) => {
      return res.status(200).json(comments);
    })
    .catch((err) => res.status(400).json({
      error: err,
    }));
};





export default router;
