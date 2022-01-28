import React, { useState, useEffect } from "react";
import axios from "axios";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import { Paper, Typography, Icon } from "@material-ui/core";
import { SchoolRounded, WorkRounded, Facebook, Twitter, LinkedIn, GitHub } from "@material-ui/icons";
import "./Resume.css";
import { Grid } from "@material-ui/core";
import AddExperience from "../Modal/Modal_Add_Experience";
import AddEducation from "../Modal/Modal_Add_Education";
function Resume(props) {
  const [modalOpenAED, setModalOpenAED] = useState(false);
  const [modalOpenAEX, setModalOpenAEX] = useState(false);
  const [experiences, setExperience] = useState([]);
  const [educations, setEducation] = useState([]);


  //Get Education Data
  async function getEd() {
    try {
      const res = await axios.get('http://localhost:5500/api/resume/getEducation')
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
      const res = await axios.get('http://localhost:5500/api/resume/getExperience')
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

                  {props.about}
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          {/*Experiences + Education*/}
          <Grid container className="section">
            <Grid item className="section_title top_30">
              <div class='card'>
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
                          Work Experience<button
                            className="openModalBtn"
                            onClick={() => {
                              setModalOpenAEX(true);
                            }}
                          >
                            <img src="https://img.icons8.com/ios/20/000000/add--v2.png" />
                          </button>
                        </h2>
                        {modalOpenAEX && <AddExperience setOpenModalAEX={setModalOpenAEX} />}

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
                          <div class='card'>
                            <h2 className="title">
                              {experience.title}<button class='task__remove-icon'
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleDeleteExperience(experience.id);
                                }}> <img src="https://img.icons8.com/ios/20/000000/delete--v2.png" /></button>
                            </h2>

                          </div>
                        </Typography>
                        <Typography variant="caption" className="timeline_date">
                          {experience.DateStart}-{experience.DateEnd}
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
                        <h2 className="title">Education<button
                          className="openModalBtn"
                          onClick={() => {
                            setModalOpenAED(true);
                          }}
                        >
                          <img src="https://img.icons8.com/ios/20/000000/add--v2.png" />
                        </button>
                        </h2>
                        {modalOpenAED && <AddEducation setOpenModalAED={setModalOpenAED} />}
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
                          <div class='card'>
                            <h2 className="title">
                              {education.title}<button class='task__remove-icon'
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleDeleteEducation(education.id);
                                }}> <img src="https://img.icons8.com/ios/20/000000/delete--v2.png" /></button>
                            </h2>

                          </div>
                        </Typography>
                        <Typography variant="caption" className="timeline_date">
                          {education.DateStart}-{education.DateEnd}
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

          {/*Services*/}
          <Grid container className="section p_50 pb_50">
            <Grid item className="section_title mb_45">
              <span></span>
              <h2>My Services</h2>

            </Grid>
            <Grid container spacing={3} justify="space-around">
              {props.services.map((service) => (
                <Grid item xs={12} sm={6} md={3}>
                  <Paper elevation={0} className="service">
                    <Icon className="service_icon">{service.icon}</Icon>
                    <Typography variant="h6" className="service_title">
                      {service.title}
                    </Typography>
                    <Typography variant="body2" className="service_description">
                      {service.description}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/*Skills*/}
          <Grid container className="section graybg p_50 pb_50">
            <Grid container spacing={3} justify={"space-between"}>
              {props.skills.map((skill) => (
                <Grid item xs={12} sm={6} md={3}>
                  <Paper elevation={0} className="skills">
                    <Typography variant="h6" className="skills_title">
                      {skill.title}
                    </Typography>
                    {skill.description.map((el) => (
                      <Typography variant="body2" className="skills_description">
                        <TimelineDot
                          variant="outlined"
                          className="timeline_dot"
                        />
                        {el}
                      </Typography>
                    ))}
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Resume;
