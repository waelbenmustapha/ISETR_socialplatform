import express from "express";
import { acceptFollowersRequest, denyOrDeleteFollowersRequest, getFollowersRequestWithLimits, getFollowersWithLimits, sendFollowRequest } from "../controllers/followers_controller.js";
import { checkFollowersTable } from "../middlewares/tables_middleware.js";

import { verifyToken } from "../middlewares/token_middleware.js";


const router = express.Router();
router.get("/:id", getFollowersWithLimits);
router.get("/requests/:id", checkFollowersTable, getFollowersRequestWithLimits);

router.post("/send-request", sendFollowRequest);
router.patch("/accept/:id", acceptFollowersRequest);
router.delete("/deny/:id", denyOrDeleteFollowersRequest);


export default router;
