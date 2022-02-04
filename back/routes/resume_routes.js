import express from "express";
import {
    getEducation,
    getExperience,
    UpdateEducation,
    UpdateExperience,
    DeleteEducation,
    DeleteExperience,
    InsertEducation,
    InsertExperience,
    InsertUserInfo,
    getUserInfo
}
    from "../controllers/resume_controller.js";
const router = express.Router();

router.get("/getEducation", getEducation);
router.get("/getExperience", getExperience);
router.patch("UpdateExperience/:educationid", UpdateExperience);
router.patch("UpdateEducation/:experienceid",UpdateEducation);
router.delete("/DeleteEducation/:educationid", DeleteEducation);
router.delete("/DeleteExperience/:experienceid",DeleteExperience);
router.post("/InsertEducation",InsertEducation);
router.post("/InsertExperience",InsertExperience);
router.post("/InsertUserInfo",InsertUserInfo);
router.get("/getUserInfo", getUserInfo);


export default router;
