import React from "react";
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import CustomButton from "../Button/Button";
import {
  HomeRounded,
  SchoolRounded,
  WorkRounded,
  Facebook,
  Twitter,
  LinkedIn,
  GitHub,
  Telegram,
} from "@material-ui/icons";
import resume from '../../../utils/resume'

import "./Header.css";
import { Grid } from "@material-ui/core";

const Header = () => {
  return (
    <Navbar expand="lg" sticky="top" className="header">
      <Navbar.Brand className="header_home">
        <HomeRounded />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="mr-auto">
          <Nav.Link>Resume</Nav.Link>
          <Nav.Link>Portfolio</Nav.Link>
        </Nav>

        <div className="header_right">
          {Object.keys(resume.socials).map((key) => (
            <a href={resume.socials[key].link} target="_blank">
              {resume.socials[key].icon}
            </a>
          ))}
          <CustomButton text={"Hire Me"} icon={<Telegram />} />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
