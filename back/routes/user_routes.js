import express from "express";
import { getLatestUserRooms } from "../controllers/room_controller.js";
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
import { checkRoomUserTable, checkUsersTable } from "../middlewares/tables_middleware.js";
import { verifyToken } from "../middlewares/token_middleware.js";

const router = express.Router();

router.get("/", verifyToken, getUsers);
router.get("/limit/", verifyToken, getUsersWithLimits);
router.get("/:id", verifyToken, getUser);
router.get("/latest-rooms/:id", checkRoomUserTable, getLatestUserRooms);
// router.get("/room-messages/", checkRoomUserTable, getLatestUserRooms);
router.post("/register", checkUsersTable, registerUser);
router.post("/login", loginUser);
router.patch("/:id", verifyToken, updateUser);
router.delete("/:id", verifyToken, deleteUser);
router.get("/search/:term", searchUsers);

export default router;
