import express from "express";
import { checkCommonRoomAndMessagesApi, checkCommonRoomApi, createRoom, getAllRoomsApi, getLatestUserRooms, getReceiverRoomId, getRoomApi, getRoomMessagesApi, getRoomUsersInfoApi, getUserLatestModifiedRoomApi } from "../controllers/room_controller.js";

import { checkRoomTable, checkRoomUserTable, checkUsersTable } from "../middlewares/tables_middleware.js";
import { verifyToken } from "../middlewares/token_middleware.js";

const router = express.Router();

// router.get("/", verifyToken, getUsers);
// router.get("/limit/", verifyToken, getUsersWithLimits);
// router.post("/add", checkRoomTable, createRoom);
router.post("/check-common-room", checkRoomTable, verifyToken, checkCommonRoomApi);
router.post("/check-common-room-messages", checkRoomTable, verifyToken, checkCommonRoomAndMessagesApi);
router.get("/", verifyToken, getAllRoomsApi);
router.get("/:id", verifyToken, getRoomApi);
router.get("/room-messages/:id", verifyToken, getRoomMessagesApi);
router.get("/get-receiver-room-id/:id", verifyToken, getReceiverRoomId);
router.get("/get-user-latest-room/:id", verifyToken, getUserLatestModifiedRoomApi);
router.get("/get-room-user-info/:id", verifyToken, getRoomUsersInfoApi);



export default router;
