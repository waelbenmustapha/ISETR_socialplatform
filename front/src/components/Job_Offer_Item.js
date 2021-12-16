import { faBookmark as faregbook, } from "@fortawesome/free-regular-svg-icons";
import { faMapMarkerAlt,faClock,faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import '../styles/Joboffers.css'
function Job_Offer_Item(props) {
  return (
    <div
    className="hovercursor"
      style={{
        borderBottom: "1px solid #ddd",
        padding: "30px",
      }}
    >{props.bookmarked?<span style={{float:'right'}}><FontAwesomeIcon icon={faBookmark} color="#FC7900" size="2x"/></span>:<span style={{float:'right'}}><FontAwesomeIcon icon={faregbook} size="2x"/></span>}
      <p className="joboffertitle">Developpeur Full Stack Senior</p>      

      <p>TechnoGm</p>
      <FontAwesomeIcon icon={faMapMarkerAlt} color="#FC7900"/>
      <span style={{margin:'7px'}}>Tunis</span>
      <p style={{marginLeft:'20px'}}>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad...</p>
      <div style={{border:'1px solid',width:'200px',padding:'3px',borderRadius:'35px',backgroundColor:'#EEE',margin:'10px',textAlign:'center'}}><FontAwesomeIcon icon={faClock}/> 7 hours ago</div>

    </div>
  );
}

export default Job_Offer_Item;
