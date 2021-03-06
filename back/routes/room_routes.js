import express from "express";
import { checkCommonRoomAndMessagesApi, checkCommonRoomApi, createRoom, getAllRoomsApi, getLatestUserRooms, getReceiverRoomId, getRoomApi, getRoomMessagesApi, getRoomUsersInfoApi, getUserLatestModifiedRoomApi } from "../controllers/room_controller.js";

import { checkRoomTable, checkRoomUserTable, checkUsersTable } from "../middlewares/tables_middleware.js";
import { verifyToken } from "../middlewares/token_middleware.js";

const router = express.Router();

// router.get("/", getUsers);
// router.get("/limit/", getUsersWithLimits);
// router.post("/add", checkRoomTable, createRoom);
router.post("/check-common-room", checkRoomTable, checkCommonRoomApi);
router.post("/check-common-room-messages", checkRoomTable, checkCommonRoomAndMessagesApi);
router.get("/", getAllRoomsApi);
router.get("/:id", getRoomApi);
router.get("/room-messages/:id",  getRoomMessagesApi);
router.get("/get-receiver-room-id/:id", getReceiverRoomId);
router.get("/get-user-latest-room/:id", getUserLatestModifiedRoomApi);
router.get("/get-room-user-info/:id", getRoomUsersInfoApi);



export default router;
