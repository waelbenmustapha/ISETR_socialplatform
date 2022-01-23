import express from "express";
import { addPost, deletePost, dislikePost, getMyFeedPostsWithLimits, getPost, getPosts, getPostsWithLimits, likePost, searchPosts, updatePost } from "../controllers/post_controller.js";

import { verifyToken } from "../middlewares/token_middleware.js";
import { checkPostsTable } from "../middlewares/tables_middleware.js";

const router = express.Router();

router.get("/", checkPostsTable, getPosts);
router.get("/feed/:user_id", checkPostsTable, getMyFeedPostsWithLimits);
router.get("/limit/", getPostsWithLimits);
router.get("/:id", getPost);
router.post("/add", addPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);
router.get("/like/:id", likePost);
router.get("/dislike/:id", dislikePost);
router.get("/search/:term", searchPosts);

export default router;
