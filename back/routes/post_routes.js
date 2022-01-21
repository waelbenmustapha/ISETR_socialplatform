import express from "express";
import { addPost, deletePost, getPost, getPosts, getPostsWithLimits, likePost, searchPosts, updatePost } from "../controllers/post_controller.js";

import { verifyToken } from "../middlewares/token_middleware.js";
import { checkPostsTable } from "../middlewares/tables_middleware.js";

const router = express.Router();

router.get("/", checkPostsTable, getPosts);
router.get("/limit/", verifyToken, getPostsWithLimits);
router.get("/:id", verifyToken, getPost);
router.post("/add", addPost);
router.patch("/:id", verifyToken, updatePost);
router.delete("/:id", verifyToken, deletePost);
router.get("/like/:id", verifyToken, likePost);
router.get("/search/:term", verifyToken, searchPosts);

export default router;
