import express from "express";
import dotEnv from "dotenv";

dotEnv.config();
const router = express.Router();
import { con } from "../config/database.js";
import { checkGroupExist, checkUserExist } from "./group_controller.js";
import { validationResult } from "express-validator";

export const checkPostExist = async (post_id) => {

  const post = con
    .select('*')
    .from('posts')
    .where('id', post_id);

  return !(post.length === 0)



}

export const checkPostAlreadyLiked = async (post_id, user_id) => {

  const likePost = await con
    .select('*')
    .from('likes')
    .where({
      post_id,
      user_id
    })

  return !(likePost.length === 0)


}


export const getPosts = async (req, res) => {
  await con
    .select("*")
    .from("posts")
    .then((posts) => {
      return res.status(200).json(posts);
    })
    .catch((err) => res.status(400).json({
      error: err,
    }));
};

export const getPostsWithLimits = async (req, res) => {
  const { page } = req.query;
  const start = parseInt(page) * 5;
  console.log(start);

  // get followers 
  await con
    .select("*")
    .from("followers")
    .where("user_id", req.params.id)
    .andWhere("status", "following")
    .then((followers) => {
      // get posts
      con
        .select("*")
        .from("posts")
        .whereIn("user_id", followers.map((follower) => follower.follower_id))
        .limit(7)
        .offset(start)
        .then(async (posts) => {

          // get likes
          const likes = await con
            .count("*")
            .from("likes")
            .whereIn("post_id", posts.map((post) => post.id));

          // get comments
          const comments = await con
            .count("*")
            .from("comments")
            .whereIn("post_id", posts.map((post) => post.id));

          // get user info
          const users = await con
            .select("*")
            .from("users")
            .whereIn("id", posts.map((post) => post.user_id));


          // response
          const response = posts.map((post, index) => {
            return {
              ...post,
              likes: likes[index],
              comments: comments[index],
              user: users[index],
            };

          });

          return res.status(200).json(response);



        })
        .catch((err) => res.status(400).json({
          error: err,
        }));
    });

};


export const getMyFeedPostsWithLimits = async (req, res) => {
  const { user_id } = req.params;
  const { page } = req.query;

  try {
    // get followers and my posts

    const posts = await con
      .raw(`SELECT po.* from followers as fl
      LEFT JOIN posts po
      
      on fl.user_id = ?
      WHERE fl.follower_id = po.user_id or po.user_id = ?
      
      order BY po.date DESC
      
      LIMIT ?, 5
      ;`, [user_id, user_id, page * 5])

    return res.status(200).json({
      success: true,
      data: posts[0]
    });

  } catch (error) {
    return res.status(400).json({
      success: false,
      error: error,
    })
  }

};

export const getPost = async (req, res) => {
  const { id } = req.params;
  await con
    .select("*")
    .from("posts")
    .where("id", id)
    .then((post) => {
      return res.status(200).json(post);
    })
    .catch((err) => res.status(400).json({
      error: err,
    }));
};

export const getGroupPosts = async (req, res) => {
  const { id } = req.params;
  console.log('get Posts')
  // check if group exist
  const group_exist = await checkGroupExist(id);
  if (!group_exist) {
    return res.status(400).json({
      success: false,
      error: "Group does not exist",
    });
  }

  await con
    .select("*")
    .from("posts")
    .where("group_id", id)
    .then((post) => {
      return res.status(200).json({
        success: true,
        data: post
      });
    })
    .catch((err) => res.status(400).json({
      success: false,
      error: err,
    }));
};

export const addPost = async (req, res) => {
  const { text, image, user_id, group_id } = req.body;

  if (group_id !== null && group_id !== undefined) {
    const group_exist = await checkGroupExist(group_id);
    if (!group_exist) {
      return res.status(400).json({
        success: false,
        error: "Group does not exist",
      });
    }
    const user_exist = await checkUserExist(user_id);
    if (!user_exist) {
      return res.status(400).json({
        success: false,
        error: "User doe\'s not exist",
      });
    }
  }


  var newPost = { text, image, user_id, group_id };
  if (group_id === undefined) {
    newPost = { text, image, user_id };
  }


  await con
    .insert(newPost)
    .into("posts")
    .then(() => {
      return res.status(200).json({
        success: true,
        message: "Post added successfully",
      });
    })
    .catch((err) =>
      res.status(400).json({
        success: false,

        message: err,
      })
    );
};


export const updatePost = async (req, res) => {
  const { id } = req.params;
  const { text, image } = req.body;
  const updatedPost = { text, image };
  await con
    .update(updatedPost)
    .from("posts")
    .where("id", id)
    .then(() => {
      return res.status(200).json({
        success: true,

        message: "Post updated successfully",
      })
    })
    .catch((err) => res.status(400).json({
      message: err,
    }));
}


export const deletePost = async (req, res) => {
  const { id } = req.params;
  await con
    .delete()
    .from("posts")
    .where("id", id)
    .then(() => {
      return res.status(201).json({
        success: true,

        message: "Post deleted successfully",
      })
    })
    .catch((err) => res.status(400).json({
      message: err,
    }));
};


export const likePost = async (req, res) => {

  // check body errors

  const { errors } = validationResult(req);
  if (!(errors.length === 0)) {

    return res.status(400).json({
      success: false,
      errors
    })
  }

  const { post_id, user_id } = req.body;



  const user_exist = await checkUserExist(user_id);
  if (!user_exist) {
    return res.status(404).json({
      success: false,
      error: 'User does\'nt exist!'
    })

  }

  const post_exist = await checkPostExist(post_id);
  if (!post_exist) {
    return res.status(404).json({
      success: false,
      error: 'Post does\'nt exist!'
    })

  }

  const alreadyLiked = await checkPostAlreadyLiked(post_id, user_id);
  if (alreadyLiked) {
    //  dislike == remove
    try {
      await con
        .delete()
        .from('likes')
        .where({
          user_id,
          post_id
        })

      return res.status(200).json({
        success: true,
        message: 'Post disliked successfully!'
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
      post_id
    })
    .into("likes")
    .then((post) => {
      return res.status(201).json({
        success: true,
        message: "Post liked successfully",
      })

    })
    .catch((err) => res.status(400).json({
      success: false,
      error: err
    }));
};



export const searchPosts = async (req, res) => {


  const { term } = req.query;
  await con
    .select("*")
    .from("posts")
    .where("text", "like", `%${term}%`)
    .then((posts) => {

      return res.status(200).json({
        success: true,
        data: posts
      });
    })
    .catch((err) => res.status(400).json({
      success: false,
      message: err,
    }));
};




export default router;
