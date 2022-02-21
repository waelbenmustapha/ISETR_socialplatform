import express from "express";
import {
  deletejob,
  getjob,
  getjobs,
  addjob,
  updatejob,
  searchjob,
  favorieJobApi,
  getFavoriejobs
} from "../controllers/job_controller.js";
import { checkFavoriTable, checkJobTable } from "../middlewares/user_middleware.js";

const router = express.Router();

router.get("/", checkJobTable,getjobs);
router.get("/:id",checkJobTable, getjob);
router.post("/add", checkJobTable,addjob);
router.post("/favorie/job", checkFavoriTable, favorieJobApi);
router.patch("/:id",  updatejob);
router.delete("/:id",  deletejob);
router.get("/search/:term",  searchjob);
router.get("/favorie/:id",  getFavoriejobs);


export default router;
