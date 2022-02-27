import express from "express";
import { createNotifApi, deleteNotifApi, getAllNotifsApi, getMyNotifsApi, markSeenUnseenApi } from "../controllers/notif_controller.js";
import { checkNotificationsTable } from "../middlewares/tables_middleware.js";

const router = express.Router();

router.get("/", checkNotificationsTable, getAllNotifsApi);
router.post("/", createNotifApi);
router.patch("/update-seen", markSeenUnseenApi);
router.delete("/:id", deleteNotifApi);

router.get("/:user_id", getMyNotifsApi);


export default router;
