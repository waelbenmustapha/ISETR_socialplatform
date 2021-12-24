import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  getUsersWithLimits,
  loginUser,
  registerUser,
  searchUsers,
  updateUser,
} from "../controllers/user_controller.js";
import { verifyToken } from "../middlewares/user_middleware.js";

const router = express.Router();

router.get("/", verifyToken, getUsers);
router.get("/limit/", verifyToken, getUsersWithLimits);
router.get("/:id", verifyToken, getUser);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.patch("/:id", verifyToken, updateUser);
router.delete("/:id", verifyToken, deleteUser);
router.get("/search/:term", verifyToken, searchUsers);

export default router;
