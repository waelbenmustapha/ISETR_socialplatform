import express from "express";
import { acceptFollowersRequest, denyOrDeleteFollowersRequest, getFollowersRequestWithLimits, getFollowersWithLimits, getMyFollowersApi, getUsersIFollowApi, getUsersYouMightKnowApi, sendFollowRequest } from "../controllers/followers_controller.js";
import { checkFollowersTable } from "../middlewares/tables_middleware.js";

import { verifyToken } from "../middlewares/token_middleware.js";


const router = express.Router();
router.get("/:id", getFollowersWithLimits);
router.get("/requests/:id", checkFollowersTable, getFollowersRequestWithLimits);
router.get("/you-might-know/:id", getUsersYouMightKnowApi);
router.get("/getmyfollowers/:id", getMyFollowersApi);
router.get("/get-users-i-follow/:id", getUsersIFollowApi);
router.post("/send-request", sendFollowRequest);
router.patch("/accept/:id", acceptFollowersRequest);
router.delete("/delete", denyOrDeleteFollowersRequest);


export default router;
