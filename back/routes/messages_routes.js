import express from "express";
import { addMessage, getMessages } from "../controllers/messages_controller.js";
;
import { checkMessagesTable, checkRoomUserTable, checkUsersTable } from "../middlewares/tables_middleware.js";
import { verifyToken } from "../middlewares/token_middleware.js";

const router = express.Router();

router.get("/", getMessages);
router.post("/add", checkMessagesTable, addMessage);


export default router;
