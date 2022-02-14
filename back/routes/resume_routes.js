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

router.get("/getEducation/:id", getEducation);
router.get("/getExperience/:id", getExperience);
router.patch("UpdateExperience/:educationid", UpdateExperience);
router.patch("UpdateEducation/:experienceid",UpdateEducation);
router.delete("/DeleteEducation/:educationid", DeleteEducation);
router.delete("/DeleteExperience/:experienceid",DeleteExperience);
router.post("/InsertEducation/:id",InsertEducation);
router.post("/InsertExperience/:id",InsertExperience);
router.post("/InsertUserInfo/:id",InsertUserInfo);
router.get("/getUserInfo/:id", getUserInfo);


export default router;
