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
import { loginValidation } from "../validators/validtors.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/limit/", getUsersWithLimits);
router.get("/:id", getUser);
router.get("/latest-rooms/:id", checkRoomUserTable, getLatestUserRooms);
// router.get("/room-messages/", checkRoomUserTable, getLatestUserRooms);
router.post("/register", checkUsersTable, registerUser);
router.post("/login", loginValidation, loginUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);
router.get("/search/:term", searchUsers);

export default router;
