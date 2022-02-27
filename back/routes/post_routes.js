import express from "express";
import { addPost, deletePost, getGroupPosts, getMyFeedPostsWithLimits, getPost, getPosts, getPostsWithLimits, getUserPosts, isPostLiked, likePost, searchPosts, updatePost } from "../controllers/post_controller.js";

import { verifyToken } from "../middlewares/token_middleware.js";
import { checkLikesTable, checkPostsTable } from "../middlewares/tables_middleware.js";
import { likePostValidator } from "../validators/validtors.js";

const router = express.Router();

router.get("/", checkPostsTable, getPosts);
router.post("/", addPost);

router.get("/feed/:user_id", checkPostsTable, getMyFeedPostsWithLimits);
router.get("/limit/", getPostsWithLimits);
router.get("/group-posts/:id", getGroupPosts);
router.get("/user-posts/:id",getUserPosts);
router.get("/postliked/:user_id/:post_id",isPostLiked);
router.get("/:id", getPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);

router.post("/like", checkLikesTable, likePost);
router.get("/search/post", searchPosts);
router.get("/likes/:id", searchPosts);

export default router;

