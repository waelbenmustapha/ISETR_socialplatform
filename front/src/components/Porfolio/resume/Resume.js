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
import "./Resume.css";
import { Grid } from "@material-ui/core";
import ProgressBar from "@ramonak/react-progress-bar";
import AddExperience from "../Modal/Modal_Add_Experience";
import AddEducation from "../Modal/Modal_Add_Education";
import AddSkills from "../Modal/Modal_Add_Skills";
import {  useParams } from "react-router-dom";
import { useAuthUser } from 'react-auth-kit';
import AddLanguage from "../Modal/Modal_Add_Language";
import ModalProject from "../Modal/Modal_Project"
import Card from "../Project/Card";
function Resume(props) {

  const [modalOpenAED, setModalOpenAED] = useState(false);
  const [modalOpenAEX, setModalOpenAEX] = useState(false);
  const [modalOpenASK, setModalOpenASK] = useState(false);
  const [modalOpenAL, setModalOpenAL] = useState(false);
  const [modalOpenAP, setModalOpenAP] = useState(false);
  const [reload, setReload] = useState(true);
  const params = useParams();

  const [experiences, setExperience] = useState([]);
  const [educations, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);
  const [languages, setLanguages] = useState([]);
  const auth = useAuthUser();


  //Get Education Data
  async function getEd() {
    try {
      const res = await axios.get(`http://localhost:5500/api/resume/getEducation/${auth().id}`)
        .then(res => {
          setEducation(res.data)
        })
    } catch (error) {
      return alert(error.message);
    };
  }
  useEffect(() => {
    getEd()
  }, [educations])


  //Get Experience Data
  async function getEx() {
    try {
      const res = await axios.get(`http://localhost:5500/api/resume/getExperience/${auth().id}`)
        .then(res => {
          setExperience(res.data)


        })
    } catch (error) {
      return alert(error.message);
    };
  }
  useEffect(() => {
    getEx()
  }, [experiences])
  /* Get skills */
  async function getSk() {
    try {
      const res = await axios.get(`http://localhost:5500/api/resume/getSkills/${auth().id}`)
        .then(res => {
          setSkills(res.data)


        })
    } catch (error) {
      return alert(error.message);
    };
  }
  useEffect(() => {
    getSk();
  }, [skills])
  /* Languages */
  async function getL() {
    try {
      const res = await axios.get(`http://localhost:5500/api/resume/getLanguage/${auth().id}`)
        .then(res => {
          setLanguages(res.data)
        })
    } catch (error) {
      return alert(error.message);
    };
  }
  
  useEffect(() => {
    getL();
  }, [languages])
  // DeleteExprience
  const handleDeleteExperience = async (id) => {
    try {
      await axios.delete(`http://localhost:5500/api/resume/DeleteExperience/${id}`);
      return alert("Experience Deleted");
    } catch (error) {
      console.log(error);
    }
  };
  // DeleteEducation
  const handleDeleteEducation = async (id) => {
    try {
      await axios.delete(`http://localhost:5500/api/resume/DeleteEducation/${id}`);
      return alert("Education Deleted");
    } catch (error) {
      console.log(error);
    }
  };
  /* Delete Technology */
  const handleDeleteSkills = async (id) => {
    try {
      await axios.delete(`http://localhost:5500/api/resume/DeleteSkills/${id}`);
      return alert("Skills Deleted");
    } catch (error) {
      console.log(error);
    }
  };
  /* Delete language */
  const handleDeleteLanguage = async (id) => {
    try {
      await axios.delete(`http://localhost:5500/api/resume/DeleteLanguage/${id}`);
      return alert("Language Deleted");
    } catch (error) {
      console.log(error);
    }
  };
  return (
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

                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
                          <button
                            className="openModalBtn"
                            onClick={() => {
                              setModalOpenAEX(true);
                            }}
                          >
                            <img src="https://img.icons8.com/material/20/add--v2.png" />
                          </button>
                        </h2>
                        {modalOpenAEX &&
                          <AddExperience closeModal={() => setModalOpenAEX(false)} />}
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
                              {experience.title}<button className='task__remove-icon'
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleDeleteExperience(experience.id);
                                }}> <img src="https://img.icons8.com/material/20/delete--v2.png" /></button>
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
                          <button
                            className="openModalBtn"
                            onClick={() => {
                              setModalOpenAED(true);
                            }}
                          >
                            <img src="https://img.icons8.com/material/20/add--v2.png" />
                          </button>
                        </h2>
                        {modalOpenAED &&
                          <AddEducation closeModal={() => setModalOpenAED(false)} />}
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
                              {education.title}<button class='task__remove-icon'
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleDeleteEducation(education.id);
                                }}> <img src="https://img.icons8.com/material/20/delete--v2.png" /></button>
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
                          <button
                            className="openModalBtn"
                            onClick={() => {
                              setModalOpenASK(true);
                            }}
                          >
                            <img src="https://img.icons8.com/material/20/add--v2.png" />
                          </button>
                        </h2>
                        {modalOpenASK &&
                          <AddSkills closeModal={() => setModalOpenASK(false)} />}
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
                              {skill.name}<button className='task__remove-icon'
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleDeleteSkills(skill.id);
                                }} > <img src="https://img.icons8.com/material/20/delete--v2.png" /></button>
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
                          Language <button
                            className="openModalBtn"
                            onClick={() => {
                              setModalOpenAL(true);
                            }}
                          >
                            <img src="https://img.icons8.com/material/20/add--v2.png" />
                          </button>
                        </h2>
                        {modalOpenAL &&
                          <AddLanguage closeModal={() => setModalOpenAL(false)} />}
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
                          <div class='cardTitle'>
                            <h2 className="title">
                              {language.name}<button class='task__remove-icon'
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleDeleteLanguage(language.id);
                                }}> <img src="https://img.icons8.com/material/20/delete--v2.png" /></button>
                            </h2>

                          </div>
                        </Typography>
                        <Typography variant="caption" className="timeline_date">
                          {language.level}

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
          <h2 className="title">
                          Project <button
                            className="openModalBtn"
                            onClick={() => {
                              setModalOpenAP(true);
                            }}
                          >
                            <img src="https://img.icons8.com/material/20/add--v2.png" />
                          </button>
                        </h2>
          {modalOpenAP &&
          <ModalProject closeModal={() => setModalOpenAP(false)}/>}
        </Grid>
      </Grid>
      <Card/>

    </div>
  );
};

export default Resume;
