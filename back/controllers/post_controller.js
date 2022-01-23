import express from "express";
import dotEnv from "dotenv";

dotEnv.config();
const router = express.Router();
import { con } from "../config/database.js";

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

export const addPost = async (req, res) => {
  const { text, image, user_id } = req.body;



  const newPost = { text, image, user_id };

  await con
    .insert(newPost)
    .into("posts")
    .then(() => {
      return res.status(200).json({
        message: "Post added successfully",
      });
    })
    .catch((err) =>
      res.status(400).json({
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
        message: "Post deleted successfully",
      })
    })
    .catch((err) => res.status(400).json({
      message: err,
    }));
};


export const likePost = async (req, res) => {
  const { id } = req.params;

  await con
    .select("*")
    .from("posts")
    .where("id", id)
    .then((post) => {
      const likes = post[0].likes + 1;
      const updatedPost = { likes };
      con
        .update(updatedPost)
        .from("posts")
        .where("id", id)
        .then(() => {
          return res.status(200).json({
            message: "Post liked successfully",
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

export const dislikePost = async (req, res) => {
  const { id } = req.params;

  await con
    .select("*")
    .from("posts")
    .where("id", id)
    .then((post) => {
      const likes = post[0].likes - 1;
      const updatedPost = { likes };
      con
        .update(updatedPost)
        .from("posts")
        .where("id", id)
        .then(() => {
          return res.status(200).json({
            message: "Post liked successfully",
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



export const searchPosts = async (req, res) => {
  const { term } = req.params;
  await con
    .select("*")
    .from("users")
    .where("text", "like", `%${term}%`)
    .then((posts) => {
      return res.status(200).json(posts);
    })
    .catch((err) => res.status(400).json({
      message: err,
    }));
};




export default router;
