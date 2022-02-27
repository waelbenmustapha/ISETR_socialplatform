import { faBookmark as faregbook } from "@fortawesome/free-regular-svg-icons";
import {
  faMapMarkerAlt,
  faClock,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthUser } from "react-auth-kit";
import "../styles/Joboffers.css";
import ConvertMinutes from "../utils/Converminutes";
function Job_Offer_Item(props) {
  const [isLiked, setIsliked] = useState(false);
  const [minutes, setminutes] = useState(0);
  const auth = useAuthUser();

  function getmins() {
    var sqldate = new Date(props.element.date);
    var currentTime = new Date();

    var difference = currentTime - sqldate;
    var mins = Math.floor(difference / 1000 / 60);
    setminutes(mins);
  }

  function addfavorit() {
    axios
      .post(`http://localhost:5500/api/job/favorie/job`, {
        user_id: auth().id,
        job_id: (props.element.job_id==undefined?props.element.id:props.element.job_id),
      })
      .then((res) => console.log(res));
  }

  function getisLiked() {

    axios
      .post("http://localhost:5500/api/job/isfavorite", {
        user_id: auth().id,
        job_id: (props.element.job_id==undefined?props.element.id:props.element.job_id),
      })
      .then((res) => {
        setIsliked(res.data);
        console.log("hey");
        console.log(res.data);
      });
  }
  useEffect(() => {
   
    getisLiked();
    getmins();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          padding: "30px 0px 30px 0px",
        }}
      >
        <img
          style={{ width: "150px", maxWidth: "150px", maxHeight: "150px" }}
          src={props.element.image}
        />
      </div>
      <div
        style={{
          flex:1,
          marginLeft:'50px',
          borderBottom: "1px solid #ddd",
          padding: "30px",
        }}
      >
        {isLiked ? (
          <span
            className="hoverfav"
            onClick={() => {
              addfavorit();
              setIsliked(!isLiked);
            }}
            style={{ float: "right" }}
          >
            <FontAwesomeIcon icon={faBookmark} color="#FC7900" size="2x" />
          </span>
        ) : (
          <span
            className="hoverfav"
            onClick={() => {
              addfavorit();
              setIsliked(!isLiked);
            }}
            style={{ float: "right" }}
          >
            <FontAwesomeIcon icon={faregbook} size="2x" />
          </span>
        )}
        <p className="joboffertitle hover">{props.element.title}</p>

        <p className="hover">{props.element.company}</p>
        <FontAwesomeIcon
          className="hover"
          icon={faMapMarkerAlt}
          color="#FC7900"
        />
        <span className="hover" style={{ margin: "7px" }}>
          {props.element.location}
        </span>
        <p className="hover" style={{ marginLeft: "20px" }}>
          {props.element.description}
        </p>
        {props.element.type == "Full" ? (
          <p className="hover" style={{ marginLeft: "17px" }}>
            Full time job
          </p>
        ) : props.element.type == "Part" ? (
          <p className="hover" style={{ marginLeft: "17px" }}>
            Part time job
          </p>
        ) : null}
        <div
          style={{
            border: "1px solid",
            width: "300px",
            padding: "3px",
            borderRadius: "35px",
            justifyContent: "center",
            display: "flex",
            alignContent: "center",
            alignItems: "center",
            backgroundColor: "#EEE",
            margin: "10px",
            textAlign: "center",
          }}
        >
          <FontAwesomeIcon style={{ margin: "5px" }} icon={faClock} />
          {ConvertMinutes(minutes)} Ago
        </div>
      </div>
    </div>
  );
}

export default Job_Offer_Item;
