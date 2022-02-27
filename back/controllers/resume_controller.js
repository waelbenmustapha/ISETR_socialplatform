import express from "express";
import dotEnv from "dotenv";
dotEnv.config();
const router = express.Router();
import { con } from "../config/database.js";
import knex from "knex";
/* --- Experience Controllers ---- */
export const getExperience = async (req, res) => {
    await con
        .select("*")
        .from("experience")
        .where('user_id', req.params.id)
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
        .insert({ 'title': req.body.title, 'DateStart': req.body.DateStart, 'description': req.body.description, 'DateEnd': req.body.DateEnd, 'user_id': req.params.id })
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
        .where('user_id', req.params.id)
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
        .insert({ 'title': req.body.title, 'DateStart': req.body.DateStart, 'DateEnd': req.body.DateEnd, 'description': req.body.description, 'user_id': req.params.id })
        .then(() => {
            res.json("education Added");
        })
        .catch((err) => res.status(400).json("Error :" + err));
};
/* --- UserInfo Controllers ---- */
export const InsertUserInfo = async (req, res) => {
    const user_id = req.params.id;
    const { name, picture, birthday, email, subtitle, facebook, linkedin, github } = req.body;
    const updatedUser = { name, picture, birthday, email, subtitle, facebook, linkedin, github, user_id };
    const a = await con;
    a.select("*")
        .from('userinfo')
        .where('user_id', user_id)
        .count('user_id')
        .then((count) => {
            console.log(count);
            if (!count == 0) {
                console.log("insert")
                a.insert(updatedUser, user_id)
                    .from('userinfo')
                    .then(() => {
                        res.status(200).json({
                            success: true,
                            message: "User Added"
                        });
                    })
                    .catch((err) => res.status(400).json("Error :" + err));
            }
            else {
                console.log("updatedUser")
                a.update(updatedUser)
                    .from('userinfo')
                    .where('user_id', user_id)
                    .then(() => {
                        res.status(200).json({
                            success: true,
                            message: "User Updated"
                        })
                    }).catch((err) => res.status(400).json("Error :" + err));
            }
        })
        .catch((err) => res.status(400).json("Error :" + err));
};
export const getUserInfo = async (req, res) => {
    await con
        .select("*")
        .from("userinfo")
        .where('user_id', req.params.id)
        .then((userinfo) => {
            res.json(userinfo);
        })
        .catch((err) => res.status(400).json("Error :" + err));
};
/* Skills Controllers*/
export const InsertSkills = async (req, res) => {
    await con
        .from('skills')
        .insert({ 'name': req.body.name, 'level': req.body.level, 'user_id': req.params.id })
        .then(() => {
            res.json("Skills Added");
        })
        .catch((err) => res.status(400).json("Error :" + err));
};
export const getSkills = async (req, res) => {
    await con
        .select("*")
        .from("skills")
        .where('user_id', req.params.id)
        .then((skills) => {
            res.json(skills);
        })
        .catch((err) => res.status(400).json("Error :" + err));
};
export const DeleteSkills = async (req, res) => {
    await con
        .from('skills')
        .where('id', req.params.skillsid)
        .delete()
        .then(() => {
            res.json("Skills Deleted");
        })
        .catch((err) => res.status(400).json("Error :" + err));
};
/* Language Controllers*/
export const InsertLanguage = async (req, res) => {
    await con
        .from('language')
        .insert({ 'name': req.body.name, 'level': req.body.level, 'user_id': req.params.id })
        .then(() => {
            res.json("Langauge Added");
        })
        .catch((err) => res.status(400).json("Error :" + err));
};
export const getLanguage = async (req, res) => {
    await con
        .select("*")
        .from("language")
        .where('user_id', req.params.id)
        .then((skills) => {
            res.json(skills);
        })
        .catch((err) => res.status(400).json("Error :" + err));
};
export const DeleteLanguage = async (req, res) => {
    await con
        .from('Language')
        .where('id', req.params.languageid)
        .delete()
        .then(() => {
            res.json("Language Deleted");
        })
        .catch((err) => res.status(400).json("Error :" + err));
};
/*Project Controllers */
export const InsertProject = async (req, res) => {
    await con
        .from('project')
        .insert({ 'picture': req.body.picture, 'name': req.body.name, 'description': req.body.description,'date': req.body.date, 'link': req.body.link, 'user_id': req.params.id })
        .then(() => {
            res.json("Project Added");
        })
        .catch((err) => res.status(400).json("Error :" + err));
};
export const getProject = async (req, res) => {
    await con
        .select("*")
        .from("project")
        .where('user_id', req.params.id)
        .then((projects) => {
            res.json(projects);
        })
        .catch((err) => res.status(400).json("Error :" + err));
};
export const DeleteProject = async (req, res) => {
    await con
        .from('project')
        .where('id', req.params.languageid)
        .delete()
        .then(() => {
            res.json("Project Deleted");
        })
        .catch((err) => res.status(400).json("Error :" + err));
};
