import express from "express";
import { addComment, deleteComment, getComment, getComments, getCommentsWithLimits, getPostComments, likeComment, unlikeComment, updateComment } from "../controllers/comment_controller.js";
import { checkCommentsTable } from "../middlewares/tables_middleware.js";

import { verifyToken } from "../middlewares/token_middleware.js";


const router = express.Router();
router.get("/", getComments);
router.get("/limit/:id", checkCommentsTable, verifyToken, getCommentsWithLimits);
router.get("/:id", verifyToken, getComment);
router.post("/add", verifyToken, addComment);
router.patch("/:id", verifyToken, updateComment);
router.delete("/:id", verifyToken, deleteComment);
router.get("/like/:id", verifyToken, likeComment);
router.get("/unlike/:id", verifyToken, unlikeComment);
router.get("/post-comments/:id", verifyToken, getPostComments);


export default router;
