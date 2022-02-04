import express from "express";
import { addComment, deleteComment, getComment, getComments, getCommentsWithLimits, getPostComments, likeComment, unlikeComment, updateComment } from "../controllers/comment_controller.js";
import { checkCommentsLikesTable, checkCommentsTable } from "../middlewares/tables_middleware.js";

import { verifyToken } from "../middlewares/token_middleware.js";
import { commentPostValidator, likeCommentValidator } from "../validators/validtors.js";


const router = express.Router();
router.get("/", checkCommentsTable, getComments);
router.get("/limit/:id", checkCommentsTable, verifyToken, getCommentsWithLimits);
router.get("/:id", verifyToken, getComment);
router.post("/", verifyToken, commentPostValidator, addComment);
router.put("/:id", verifyToken, updateComment);
router.delete("/:id", verifyToken, deleteComment);
router.post("/like", verifyToken, checkCommentsLikesTable, likeCommentValidator, likeComment);
router.get("/post-comments/:id", verifyToken, getPostComments);


export default router;
