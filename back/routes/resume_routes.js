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
    getUserInfo,
    getSkills,
    InsertSkills,
    InsertLanguage,
    getLanguage,
    DeleteLanguage,
    DeleteSkills,
    getProject,
    InsertProject,
    DeleteProject
}
    from "../controllers/resume_controller.js";
import { checkEducationTable, checkExperienceTable, checkLanguageTable, checkProjectTable, checkSkillsTable, checkUserInfoTable } from "../middlewares/tables_middleware.js";
const router = express.Router();
/* Education Api */
router.get("/getEducation/:id", getEducation);
router.post("/InsertEducation/:id", checkEducationTable, InsertEducation);
router.delete("/DeleteEducation/:educationid", DeleteEducation);
router.patch("UpdateEducation/:experienceid", UpdateEducation);
/* Experience Api */
router.get("/getExperience/:id", getExperience);
router.patch("UpdateExperience/:educationid", UpdateExperience);
router.delete("/DeleteExperience/:experienceid", DeleteExperience);
router.post("/InsertExperience/:id", checkExperienceTable, InsertExperience);
/* Userinfo Api */
router.post("/InsertUserInfo/:id", checkUserInfoTable, InsertUserInfo);
router.get("/getUserInfo/:id", getUserInfo);
/* Skills Api */
router.get("/getSkills/:id", getSkills);
router.post("/InsertSkills/:id", checkSkillsTable, InsertSkills);
router.delete("/DeleteSkills/:skillsid", DeleteSkills);
/* Language */
router.get("/getLanguage/:id", getLanguage);
router.post("/InsertLanguage/:id", checkLanguageTable, InsertLanguage);
router.delete("/DeleteLanguage/:languageid", DeleteLanguage);
/* Project */
router.get("/getProject/:id", getProject);
router.post("/InsertProject/:id", checkProjectTable, InsertProject);
router.delete("/DeleteProject/:languageid", DeleteProject);

export default router;
