import dotEnv from "dotenv";

dotEnv.config();
import { con } from "../config/database.js";
import { createRoom, saveMessage } from "./room_controller.js";









export const getMessages = async (req, res) => {
  try {

    await con.select("*").from("messages").then((data) => {
      console.log(data);
      return res.status(200).json({
        status: "success",
        data: data,
      })
    });
  } catch (error) {

    return res.status(400).json({
      status: "error",
      error: err,
    });
  }


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

export const addMessage = async (req, res) => {
  const { text, file, sender_id, room_id } = req.body;

  if (room_id === undefined || room_id === null) {
    // create room
    createRoom(null, null)
      .then(data => {
        // save message
        console.log('room _id', data);
        const payload = { text, sender_id: parseInt(sender_id), room_id: data };
        saveMessage(payload)
          .then(data => {
            return res.status(200).json({
              status: "success",
              data: data,
            });
          })
          .catch(err => {
            return res.status(400).json({
              error: err,
            });
          }
          )
      }
      ).catch(err => {
        return res.status(400).json({
          error: err,
        });
      })
      ;

  } else {

    const newMessage = { text, file, sender_id: parseInt(sender_id), room_id };

    saveMessage(newMessage)
      .then(data => {
        return res.status(200).json({
          status: "success",
          data: data,
        });
      })
      .catch(err => {
        return res.status(400).json({
          error: err,
        });
      }
      )
  }
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





