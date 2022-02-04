import express from "express";
import dotEnv from "dotenv";
dotEnv.config();
const router = express.Router();
import { con } from "../config/database.js";
/* --- Experience Controllers ---- */
export const getExperience = async (req, res) => {
    await con
        .select("*")
        .from("experience")
        .then((experience) => {
            res.json(experience);
        })
        .catch((err) => res.status(400).json("Error :" + err));
};
export const UpdateExperience = async (req, res) => {
    await con
        .from("experience")
        .where('id', req.params.experienceid)
        .update({ 'title': req.body.title, 'DateStart': req.body.DateStart, 'DateEnd': req.body.DateEnd, 'description': req.body.description })
        .then(() => {
            res.json("Experience updated");
        })
        .catch((err) => res.status(400).json("Error :" + err));
};
export const DeleteExperience = async (req, res) => {
    await con
        .from('experience')
        .where('id', req.params.experienceid)
        .delete()
        .then(() => {
            res.json("Experience Deleted");
        })
        .catch((err) => res.status(400).json("Error :" + err));
};
export const InsertExperience = async (req, res) => {
    await con
        .from('experience')
        .insert({ 'title': req.body.title, 'DateStart': req.body.DateStart, 'description': req.body.description,'DateEnd': req.body.DateEnd})
        .then(() => {
            res.json("Experience Added");
        })
        .catch((err) => res.status(400).json("Error :" + err));
};

/* --- Education Controllers ---- */
export const getEducation = async (req, res) => {
    await con
        .select("*")
        .from("education")
        .then((education) => {
            res.json(education);
        })
        .catch((err) => res.status(400).json("Error :" + err));
};
export const UpdateEducation = async (req, res) => {
    await con
        .from("education")
        .where('id', req.params.educationid)
        .update({ 'title': req.body.title, 'DateStart': req.body.DateStart, 'DateEnd': req.body.DateEnd, 'description': req.body.description })
        .then(() => {
            res.json("Experience updated");
        })
        .catch((err) => res.status(400).json("Error :" + err));
};
export const DeleteEducation = async (req, res) => {
    await con
        .from('education')
        .where('id', req.params.educationid)
        .delete()
        .then(() => {
            res.json("education Deleted");
        })
        .catch((err) => res.status(400).json("Error :" + err));
};
export const InsertEducation = async (req, res) => {
    await con
        .from('education')
        .insert({ 'title': req.body.title, 'DateStart': req.body.DateStart,'DateEnd': req.body.DateEnd,'description': req.body.description })
        .then(() => {
            res.json("education Added");
        })
        .catch((err) => res.status(400).json("Error :" + err));
};
/* --- UserInfo Controllers ---- */
export const InsertUserInfo = async (req, res) => {
    await con
        .from('userinfo')
        .insert({ 'picture': req.body.picture, 'name': req.body.name, 'birthday': req.body.birthday,'email': req.body.description,'subtitle': req.body.subtitle,'facebook': req.body.facebook,'linkedin': req.body.github})
        .then(() => {
            res.json("Info Added");
        })
        .catch((err) => res.status(400).json("Error :" + err));
};
export const getUserInfo = async (req, res) => {
        await con
            .select("*")
            .from("userinfo")
       
            .then((userinfo) => {
                res.json(userinfo);
            })
            .catch((err) => res.status(400).json("Error :" + err));
    };