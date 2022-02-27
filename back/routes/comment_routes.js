import express from "express";
import { addComment, deleteComment, getComment, getComments, getCommentsWithLimits, getPostComments, likeComment, unlikeComment, updateComment } from "../controllers/comment_controller.js";
import { checkCommentsLikesTable, checkCommentsTable } from "../middlewares/tables_middleware.js";

import { verifyToken } from "../middlewares/token_middleware.js";
import { commentPostValidator, likeCommentValidator } from "../validators/validtors.js";


const router = express.Router();
router.get("/", checkCommentsTable, getComments);
router.get("/limit/:id", checkCommentsTable, getCommentsWithLimits);
router.get("/:id", getComment);
router.post("/", commentPostValidator, addComment);
router.put("/:id",  updateComment);
router.delete("/:id",  deleteComment);
router.post("/like",  checkCommentsLikesTable, likeCommentValidator, likeComment);
router.get("/post-comments/:id",  getPostComments);


export default router;
