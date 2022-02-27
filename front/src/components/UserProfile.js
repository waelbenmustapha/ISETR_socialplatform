import React, { useState, useEffect } from "react";
import axios from "axios";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import { Typography } from "@material-ui/core";
import { SchoolRounded, WorkRounded } from "@material-ui/icons";
import "./Porfolio/resume/Resume.css";
import "./Porfolio/Profile/Profile.css";
import { useParams } from "react-router-dom";

import { Grid } from "@material-ui/core";
import ProgressBar from "@ramonak/react-progress-bar";
import {
    Face,
    Work,
    Facebook,
    Email,
    LinkedIn,
    GitHub,
    Cake,


} from "@material-ui/icons";
import { useAuthUser } from 'react-auth-kit';
import { useLocation } from 'react-router-dom';

function ViewProfile(props) {
    const [experiences, setExperience] = useState([]);
    const [educations, setEducation] = useState([]);
    const [skills, setSkills] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [projects, setProjects] = useState([]);
    const [userinfos, setUserInfo] = useState([]);
    const { state: { infoId } = {} } = useLocation();
    const [reload, setReload] = useState(true);
    const params = useParams();

    console.log("Loutaaa ..-------");
    console.log(infoId);
    const auth = useAuthUser();

    async function getP() {
        try {
            const res = await axios.get(`http://localhost:5500/api/resume/getProject/${infoId}`)
                .then(res => {
                    setProjects(res.data)
                })
        } catch (error) {
            return alert(error.message);
        };
    }

    //Get Education Data
    async function getEd() {
        try {
            const res = await axios.get(`http://localhost:5500/api/resume/getEducation/${infoId}`)
                .then(res => {
                    setEducation(res.data)
                })
        } catch (error) {
            return alert(error.message);
        };
    }


    //Get Experience Data
    async function getEx() {
        try {
            const res = await axios.get(`http://localhost:5500/api/resume/getExperience/${infoId}}`)
                .then(res => {
                    setExperience(res.data)
                })
        } catch (error) {
            return alert(error.message);
        };
    }

    /* Get skills */
    async function getSk() {
        try {
            const res = await axios.get(`http://localhost:5500/api/resume/getSkills/${infoId}}`)
                .then(res => {
                    setSkills(res.data)
                })
        } catch (error) {
            return alert(error.message);
        };
    }

    /* Languages */
    async function getL() {
        try {
            const res = await axios.get(`http://localhost:5500/api/resume/getLanguage/${infoId}}`)
                .then(res => {
                    setLanguages(res.data)
                })
        } catch (error) {
            return alert(error.message);
        };
    }

    async function getUserInfo() {
        try {
            await axios.get(`http://localhost:5500/api/resume/getUserInfo/${infoId}}`)
                .then(res => {
                    setUserInfo(res.data)
                })
        } catch (error) {
            return alert(error.message);
        };
    }

    useEffect(() => {
        getUserInfo();
        getL();
        getSk();
        getEx();
        getEd();
        getP();

    }, [reload, params.id]);
    return (
        <div className="main__chatbody">

            <div>
                {userinfos.map((userinfo) => (
                    <div className="profile container_shadow">
                        <div className="profile_name">
                        </div>
                        <div class="container">
                            <div class="crop">
                                <img className="profile_img" src={userinfo.picture} alt="" />
                            </div>
                        </div>
                        <ul className="profile_information">
                            <li></li>
                            <li>
                                <p>
                                    <Face />
                                    <span>Name:</span> {userinfo.name}{" "}
                                </p>
                            </li>
                            <li>
                                <p>
                                    <Cake />
                                    <span>Birthday:</span> {JSON.stringify(userinfo.birthday).substring(1, 11)}
                                </p>
                            </li>
                            <li>
                                <p>
                                    <Work />
                                    <span>Subtitle:</span> {userinfo.subtitle}
                                </p>
                            </li>
                            <li>
                                <p>
                                    <Email />
                                    <span>Email:</span> {userinfo.email}
                                </p>
                            </li>
                            <li >

                                <p>
                                    <Facebook />
                                    <span>Facebook:</span> {userinfo.facebook}
                                </p>
                            </li>
                            <li>
                                <p>
                                    <GitHub />
                                    <span>Github:</span> {userinfo.github}
                                </p>
                            </li>
                            <li>
                                <p>
                                    <LinkedIn />
                                    <span>Linkedin:</span> {userinfo.linkedin}
                                </p>
                            </li>
                        </ul>



                    </div>
                ))}

            </div>
            <div className="main_resume">
                <Grid container>
                    <Grid item xs={12}>
                        {/*About me*/}
                        <Grid container className="section p_30 pb_45">
                            <Grid item className="section_title top_30">
                                <span></span>
                                <h2 className="title">About Me </h2>
                            </Grid>
                            <Grid container className="top_30">
                                <Grid item>
                                    <Typography variant="body2" className="aboutme_text">

                                        {props.about}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        {/*Experiences + Education*/}
                        <Grid container className="section">
                            <Grid item className="section_title top_30">
                                <div class='cardTitle'>
                                    <span></span>
                                    <h2 className="title">Resume
                                    </h2>
                                </div>
                            </Grid>
                            <Grid container className="top_30">
                                {/*Experiences*/}
                                <Grid item md={6} className="experience pb_30">
                                    <Timeline className="timeline">
                                        <TimelineItem>
                                            <TimelineSeparator>
                                                <TimelineDot className="timeline_dot_header">
                                                    <WorkRounded />
                                                </TimelineDot>
                                                <TimelineConnector />
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                <Typography variant="h6" className="timeline_header">
                                                    <h2 className="title">
                                                        Work Experience

                                                    </h2>

                                                </Typography>
                                            </TimelineContent>
                                        </TimelineItem>
                                        {experiences.map((experience) => (
                                            <TimelineItem>
                                                <TimelineSeparator className="separator_padding">
                                                    <TimelineDot
                                                        variant="outlined"
                                                        className="timeline_dot"
                                                    />
                                                    <TimelineConnector />
                                                </TimelineSeparator>
                                                <TimelineContent className="timeline_content">
                                                    <Typography className="timeline_title">
                                                        <div class='cardTitle'>
                                                            <h2 className="title">
                                                                {experience.title}
                                                            </h2>

                                                        </div>
                                                    </Typography>
                                                    <Typography variant="caption" className="timeline_date">
                                                        {JSON.stringify(experience.DateStart).substring(1, 11)} To {JSON.stringify(experience.DateEnd).substring(1, 11)}
                                                    </Typography>
                                                    <Typography
                                                        variant="body2"
                                                        className="timeline_description">
                                                        {experience.description}
                                                    </Typography>
                                                </TimelineContent>
                                            </TimelineItem>
                                        ))}
                                    </Timeline>
                                </Grid>
                                {/*Experiences*/}
                                <Grid item md={6} className="experience pb_30">
                                    <Timeline className="timeline">
                                        <TimelineItem>
                                            <TimelineSeparator>
                                                <TimelineDot className="timeline_dot_header">
                                                    <SchoolRounded />
                                                </TimelineDot>
                                                <TimelineConnector />
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                <Typography variant="h6" className="timeline_header">

                                                    <h2 className="title">Education

                                                    </h2>

                                                </Typography>
                                            </TimelineContent>
                                        </TimelineItem>
                                        {educations.map((education) => (
                                            <TimelineItem>
                                                <TimelineSeparator className="separator_padding">
                                                    <TimelineDot
                                                        variant="outlined"
                                                        className="timeline_dot"
                                                    />
                                                    <TimelineConnector />
                                                </TimelineSeparator>
                                                <TimelineContent className="timeline_content">
                                                    <Typography className="timeline_title">
                                                        <div class='cardTitle'>
                                                            <h2 className="title">
                                                                {education.title}
                                                            </h2>

                                                        </div>
                                                    </Typography>
                                                    <Typography variant="caption" className="timeline_date">
                                                        {JSON.stringify(education.DateStart).substring(1, 11)} To {JSON.stringify(education.DateEnd).substring(1, 11)}
                                                    </Typography>
                                                    <Typography
                                                        variant="body2"
                                                        className="timeline_description"
                                                    >
                                                        {education.description}
                                                    </Typography>
                                                </TimelineContent>
                                            </TimelineItem>
                                        ))}
                                    </Timeline>
                                </Grid>
                            </Grid>
                        </Grid>

                        {/*Skills*/}
                        <Grid container className="section">
                            <Grid item className="section_title top_30">
                                <div class='cardTitle'>
                                    <span></span>
                                    <h2 className="title">Skills
                                    </h2>
                                </div>
                            </Grid>
                            <Grid container className="top_30">
                                {/*Tecnology and Framework*/}
                                <Grid item md={6} className="experience pb_30">
                                    <Timeline className="timeline">
                                        <TimelineItem>
                                            <TimelineSeparator>
                                                <TimelineDot className="timeline_dot_header">
                                                    <WorkRounded />
                                                </TimelineDot>
                                                <TimelineConnector />
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                <Typography variant="h6" className="timeline_header">
                                                    <h2 className="title">
                                                        Skills

                                                    </h2>

                                                </Typography>
                                            </TimelineContent>
                                        </TimelineItem>
                                        {skills.map((skill) => (
                                            <TimelineItem>
                                                <TimelineSeparator className="separator_padding">
                                                    <TimelineDot
                                                        variant="outlined"
                                                        className="timeline_dot"
                                                    />
                                                    <TimelineConnector />
                                                </TimelineSeparator>
                                                <TimelineContent className="timeline_content">
                                                    <Typography className="timeline_title">
                                                        <div class='cardTitle'>
                                                            <h2 className="title">
                                                                {skill.name}
                                                            </h2>

                                                        </div>
                                                    </Typography>
                                                    <Typography variant="body2" className="service_description">
                                                        <div className="wrapper"
                                                            barContainerClassName="container"
                                                            completedClassName="barCompleted" >
                                                            <ProgressBar completed={skill.level}
                                                            />
                                                        </div>
                                                    </Typography>
                                                </TimelineContent>
                                            </TimelineItem>
                                        ))}
                                    </Timeline>
                                </Grid>
                                {/*Experiences*/}
                                <Grid item md={6} className="experience pb_30">
                                    <Timeline className="timeline">
                                        <TimelineItem>
                                            <TimelineSeparator>
                                                <TimelineDot className="timeline_dot_header">
                                                    <SchoolRounded />
                                                </TimelineDot>
                                                <TimelineConnector />
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                <Typography variant="h6" className="timeline_header">
                                                    <h2 className="title">
                                                        Language

                                                    </h2>

                                                </Typography>
                                            </TimelineContent>
                                        </TimelineItem>
                                        {languages.map((language) => (
                                            <TimelineItem>
                                                <TimelineSeparator className="separator_padding">
                                                    <TimelineDot
                                                        variant="outlined"
                                                        className="timeline_dot"
                                                    />
                                                    <TimelineConnector />
                                                </TimelineSeparator>
                                                <TimelineContent className="timeline_content">
                                                    <Typography className="timeline_title">

                                                    </Typography>
                                                    <Typography variant="caption" className="timeline_date">


                                                    </Typography>
                                                    <Typography
                                                        variant="body2"
                                                        className="timeline_description"
                                                    >
                                                    </Typography>
                                                </TimelineContent>
                                            </TimelineItem>
                                        ))}
                                    </Timeline>
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
                <div>
                    <TimelineContent>
                        <Typography variant="h6" className="timeline_header">
                            <h2 className="title">
                                Project

                            </h2>

                        </Typography>
                    </TimelineContent>
                    <div className='container1'>
                        {projects.map((project) => (
                            <div>
                                <div class="card">
                                    <div class="card-img-holder">
                                        <img src={project.picture} />
                                    </div>
                                    <h3 class="blog-title">{project.name}</h3>
                                    <span class="blog-time"> {JSON.stringify(project.date).substring(1, 11)}</span>
                                    <p class="description">
                                        {project.description}                </p>
                                    <div class="options">
                                        <button class="btn"><a href={project.link} >Check</a></button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewProfile;
