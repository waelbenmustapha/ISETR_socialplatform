import React from "react";
import like from "../assets/icons/like.png";
import comment from "../assets/icons/comment.png";
import dot from "../assets/icons/reddot.png";

import friend from "../assets/icons/friend.png";
function Notification_Item(props) {
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
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        {props.subject == "like" ? (
          <img
            src={like}
            alt="like"
            style={{ height: "20px", width: "20px" }}
          />
        ) : props.subject == "comment" ? (
          <img
            src={comment}
            alt="like"
            style={{ height: "20px", width: "20px" }}
          />
        ) : props.subject=="friend"?        <img src={friend} alt="like" style={{ height: "20px", width: "20px" }} />:null
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
            {props.subject == "like" ? (
              <span> Liked Your Post</span>
            ) : props.subject == "comment" ? (
              <span> Commented on your Post</span>
            ) : props.subject == "friend" ? (
              <span> Sent you a friend request</span>
            ) : null}
          </p>
          <p style={{ fontSize: "14px", padding: "5px", color: "#888" }}>
{ConvertMinutes(props.timeago)} ago</p>
        </div>
      </div>
    </div>
  );
}

export default Notification_Item;
