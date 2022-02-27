import React, { useState, useEffect } from "react";

import "./Profile.css";
import axios from "axios";
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
import ModalProfile from '../Modal/Modal_Profile'
const Profile = (props) => {
  const auth = useAuthUser();
  const [modalOpen, setModalOpen] = useState(false);
  const [userinfos, setUserInfo] = useState([]);
  async function getUserInfo() {
    try {
      await axios.get(`http://localhost:5500/api/resume/getUserInfo/${auth().id}`)
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
    <div>
      <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }} >
        <img src="https://img.icons8.com/material/24/000000/edit--v1.png" />
      </button>
      {modalOpen &&
        <ModalProfile closeModal={() => setModalOpen(false)} />}
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
                <span>Birthday:</span> {JSON.stringify(userinfo.birthday).substring(1,11)}
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
  );
};

export default Profile;
