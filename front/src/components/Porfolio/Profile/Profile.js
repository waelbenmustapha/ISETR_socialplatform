import React, { useState, useEffect } from "react";

import "./Profile.css";
import { Button, Grid, Icon, Typography } from "@material-ui/core";
import resume from '../../../utils/resume'
import axios from "axios";
import GetAppIcon from "@material-ui/icons/GetApp";
import CustomButton from "../Button/Button";
import ModalProfile from '../Modal/Modal_Profile'
const Profile = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [userinfos, setUserInfo] = useState([]);
  async function getUserInfo() {
    try {
      const res = await axios.get('http://localhost:5500/api/resume/getUserInfo')
        .then(res => {
          setUserInfo(res.data)
        })
    } catch (error) {
      return alert(error.message);
    };
  }

  useEffect(() => {
    getUserInfo()

  }, [userinfos])

  return (
    <div className="profile-container_shadow">
      <div className="profile_name">
      </div>
      <figure className="profile_image">
        <div className="user">
          <img src="../../../images/avatar.jpg" alt="" />
          <label for="file-input">
          </label>
          <input id="file-input" type="file" />
        </div>
      </figure>
      <div className="border">
        <ul className="profile_information">


          <div className="icon">
            <button
              className="openModalBtn"
              onClick={() => {
                setModalOpen(true);
              }} >
              <img src="https://img.icons8.com/ios/20/000000/add--v2.png" />
            </button>
            {modalOpen &&
              <ModalProfile closeModal={() => setModalOpen(false)} />}
          </div>
          {userinfos.map((userinfo) => (
            <div>
              <li>
                <p>
                  <span>Name:</span> {userinfo.name}
                </p>
              </li>
              <li>
                <p>
                  <span>Birthday:</span> {userinfo.birthday}
                </p>
              </li>
              <li>
                <p>
                  <span>Subtitle:</span> {userinfo.subtitle}
                </p>
              </li>
              <li>
                <p>
                  <span>Email:</span> {userinfo.email}
                </p>
              </li>
              <li>
                <p>
                  <span>Picture:</span> {userinfo.picture}
                </p>
              </li>
              <li>
                <p>
                  <span>Github:</span> {userinfo.github}
                </p>
              </li>
              <li>
                <p>
                  <span>Facebook:</span> {userinfo.facebook}
                </p>
              </li>
              <li>
                <p>
                  <span>Linkedin:</span> {userinfo.linkedin}
                </p>
              </li>
            </div>
          ))}

        </ul>

        <Grid xs={12} className="button_container">
          <CustomButton text={"Download CV"} icon={<GetAppIcon />} />
        </Grid>
      </div>
    </div>
  );
};

export default Profile;
