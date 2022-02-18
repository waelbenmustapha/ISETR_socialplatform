import express from "express";
import dotEnv from "dotenv";

dotEnv.config();
const router = express.Router();
import { con } from "../config/database.js";


export const addjob = async (req, res ) => {

    await con
      .insert({'title': req.body.title,'description': req.body.description,'image': req.body.image,"type": req.body.type})
      .into('jobs')
      .then(data => res.json(data))
      .catch(err => res.json(err))

  }

export const getjobs = async (req, res) => {
  await con
    .select("*")
    .from("jobs")
    .then((jobs) => {
      res.json(jobs);
    })
    .catch((err) => res.status(400).json("Error: " + err));
};


export const getjob = async (req, res) => {
  const { id } = req.params;
  await con
    .select("*")
    .from("jobs")
    .where("id", id)
    .then((book) => {
      res.json(book);
    })
    .catch((err) => res.status(400).json("Error: " + err));
};

export const updatejob = async (req, res) => {
  const { id } = req.params;
  const { title,description,image,type} = req.body;
  const updatedjob = { title,description,image,type };
  await con
    .update(updatedjob)
    .from("jobs")
    .where("id", id)
    .then(() => {
      res.json("job updated");
    })
    .catch((err) => res.status(400).json("Error: " + err));
};

export const deletejob = async (req, res) => {
  const { id } = req.params;
  await con
    .delete()
    .from("jobs")
    .where("id", id)
    .then(() => {
      res.json("job deleted");
    })
    .catch((err) => res.status(400).json("Error: " + err));
};

export const searchjob = async (req, res) => {
  const { term } = req.params;
  await con
    .select("*")
    .from("jobs")
    .where("title", "like", `%${term}%`)
    .then((jobs) => {
      res.json(jobs);
    })
    .catch((err) => res.status(400).json("Error: " + err));
};

  export const checkPostAlreadyFavorie = async (job_id, user_id) => {

    const Favoriejob = await con
      .select('*')
      .from('favorie')
      .where({
        job_id,
        user_id
      })
  
    return !(Favoriejob.length === 0)
  
  
  }


  export const favorieJobApi = async (req, res) => {

    const { job_id, user_id } = req.body;


  const alreadyFavorie = await checkPostAlreadyFavorie(job_id, user_id);
  if (alreadyFavorie) {
    //  dislike == remove
    try {
      await con
        .delete()
        .from('favorie')
        .where({
          job_id,
          user_id
        })

      return res.status(200).json({
        success: true,
        message: 'favorie disliked successfully!'
      })

    } catch (error) {
      return res.status(400).json({
        success: false,
        error
      })
    }
  }

  // like == insert
  await con
    .insert({
      user_id,
      job_id
    })
    .into("favorie")
    .then((job) => {
      return res.status(201).json({
        success: true,
        message: "Job liked successfully",
      })

    })
    .catch((err) => res.status(400).json({
      success: false,
      error: err
    }));
};


export default router; 