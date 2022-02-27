import React, { useEffect, useState } from "react";
import like from "../assets/icons/like.png";
import comment from "../assets/icons/comment.png";
import dot from "../assets/icons/reddot.png";
import axios from "axios";
import friend from "../assets/icons/friend.png";
import { useHistory } from "react-router-dom";
function Notification_Item(props) {
  const [minutes,setminutes]=useState(0);
  const history=useHistory();

function markseen(){
  axios.patch("http://localhost:5500/api/notif/update-seen",{id:props.notifid,seen:true});
}

 useEffect(() => {
  var sqldate = new Date(props.date);
  var currentTime = new Date();

  var difference=currentTime-sqldate;
  var mins = Math.floor((difference/1000)/60);
  console.log("minutes are "+mins)
  setminutes(mins);

 }, [])
 
//convert minutes to days,hours,minutes
    function ConvertMinutes(num){
 var d = Math.floor(num/1440); // 60*24
 var h = Math.floor((num-(d*1440))/60);
 var m = Math.round(num%60);

  if(d>0){
    return(d + " days, " + h + " hours, "+m+" minutes");
  }else if(h>0){
    return(h + " hours, "+m+" minutes");
  }
  else{
    return(m+" minutes");

  }
}

        
  return (
    <div style={{ borderTop: "1px solid #ccc", padding: "15px",position:'relative' }}>
      {!props.seen?<span style={{position:'absolute',right:'10px',top:'45%'}}><img style={{height:'13px',width:'13px'}} src={dot}/></span>:null}
      <div
      onClick={()=>{history.push(`/post/${props.postid}`);markseen()}}
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        {props.subject == "l" ? (
          <img
            src={like}
            alt="like"
            style={{ height: "20px", width: "20px" }}
          />
        ) : props.subject == "c" ? (
          <img
            src={comment}
            alt="like"
            style={{ height: "20px", width: "20px" }}
          />
        ) : props.subject=="s"?        <img src={friend} alt="like" style={{ height: "20px", width: "20px" }} />:null
    }

        <img
          src={props.user.img}
          style={{
            height: "50px",
            width: "50px",
            marginLeft: "10px",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <p
            style={{
              fontSize: "14px",
              padding: "5px",
              fontWeight: props.seen ? "500" : "600",
            }}
          >
           {props.user.name}
            {props.subject == "l" ? (
              <span> Liked Your Post</span>
            ) : props.subject == "c" ? (
              <span> Commented on your Post</span>
            ) : props.subject == "s" ? (
              <span> Sent you a friend request</span>
            ) : null}
          </p>
          <p style={{ fontSize: "14px", padding: "5px", color: "#888" }}>
{ConvertMinutes(minutes)} ago</p>
        </div>
      </div>
    </div>
  );
}

export default Notification_Item;
