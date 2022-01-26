import express from "express";
import dotEnv from "dotenv";
import jwt from "jsonwebtoken";

dotEnv.config();
const router = express.Router();
import { con } from "../config/database.js";
import { validationResult } from "express-validator";



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


  const newComment = { comment, user_id, post_id };

  await con
    .insert(newComment)
    .into("comments")
    .then(() => {
      return res.status(200).json({
        message: "Comment added successfully",
      });
    })
    .catch((err) =>
      res.status(400).json({
        message: err,
      })
    );
};


export const updateComment = async (req, res) => {
  const { id } = req.params;
  const { comment } = req.body;
  const updatedComment = { comment };
  await con
    .update(updatedComment)
    .from("comments")
    .where("id", id)
    .then(() => {
      return res.status(200).json({
        message: "Comment updated successfully",
      })
    })
    .catch((err) => res.status(400).json({
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
  const { id } = req.params;

  await con
    .select("*")
    .from("comments")
    .where("id", id)
    .then((comment) => {
      const likes = comment[0].likes + 1;
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
