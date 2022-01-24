import express from "express";
import {
    getEducation,
    getExperience,
    UpdateEducation,
    UpdateExperience,
    DeleteEducation,
    DeleteExperience,
    InsertEducation,
    InsertExperience
}
    from "../controllers/resume_controller.js";
import {verifyToken} from'../middlewares/user_middleware.js';
const router = express.Router();

router.get("/getEducation", getEducation);
router.get("/getExperience", getExperience);
router.patch("/:id", UpdateExperience);
router.patch("/:id", UpdateEducation);
router.delete("/:id", DeleteEducation);
router.delete("/:id", DeleteExperience);
router.post("/InsertEducation",InsertEducation);
router.post("/InsertExperience", InsertExperience);
export default router;
