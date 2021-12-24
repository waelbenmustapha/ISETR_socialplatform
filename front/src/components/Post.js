import {
  faComment,
  faEllipsisH,
  faFileImage,
  faFileVideo,
  faHeart,
  faPaperPlane,
  faShare,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";
import ConvertMinutes from "../utils/Converminutes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react/cjs/react.development";
import Comment_Item from "./Comment_Item";

function Post(props) {
  const [showcomments, setshowcomments] = useState(false);

 
  return (
    <div>
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "10px",
          marginTop: "10px",
          padding: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignContent: "center",
          }}
        >
          <img
            src={props.post.User.img}
            style={{ height: "50px", width: "50px", borderRadius: "50%" }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <p
              style={{
                fontWeight: "600",
                fontSize: "14px",
                opacity: "0.85",
                paddingLeft: "5px",
                margin: "0px",
              }}
            >
              {props.post.User.name}
            </p>
            <p
              style={{
                fontWeight: "500",
                fontSize: "12px",
                opacity: "0.85",
                paddingLeft: "10px",
                margin: "0px",
              }}
            >
              {props.post.User.current}
            </p>
            <p
              style={{
                fontWeight: "500",
                fontSize: "13px",
                opacity: "0.85",
                paddingLeft: "15px",
                margin: "0px",
              }}
            >
              {ConvertMinutes(props.post.timeago)} ago
            </p>
          </div>
          <FontAwesomeIcon
            icon={faEllipsisH}
            size="2x"
            style={{ marginLeft: "auto", padding: "5px" }}
            className="hover"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: "5px",
            justifyContent: "space-between",
          }}
        >
          <p>{props.post.description}</p>
          <img
            src={props.post.img}
            style={{ maxHeight: "400px", maxWidth: "400px",margin:'0 auto' }}
          />
          <div style={{ flexDirection: "row", display: "flex" }}>
            <p style={{ fontSize: "14px", fontWeight: "500" }}>
              {props.post.likes} Like
            </p>
            <p
              onClick={() => setshowcomments(!showcomments)}
              style={{
                marginLeft: "auto",
                fontSize: "14px",
                fontWeight: "500",
                marginRight: "10px",
              }}
            >
              {props.post.comments.length} Comments
            </p>
            <p style={{ fontSize: "14px", fontWeight: "500" }}>
              {props.post.shares} Share
            </p>
          </div>
          <span className="hr"></span>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <p>
              <FontAwesomeIcon
                className="hover"
                style={{ marginRight: "7px" }}
                icon={faHeart}
              />
              Like
            </p>
            <p>
              <FontAwesomeIcon
                className="hover"
                style={{ marginRight: "7px" }}
                icon={faComment}
              />
              Comment
            </p>
            <p>
              <FontAwesomeIcon
                className="hover"
                style={{ marginRight: "7px" }}
                icon={faShare}
              />
              Share
            </p>
          </div>
          <span className="hr"></span>
          {showcomments ? props.post.comments.map((comm)=><Comment_Item comment={comm}/>) : null}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignContent: "center",

              margin: "5px",
            }}
          >
            <img
              src="https://www.bootdey.com/img/Content/avatar/avatar6.png"
              style={{
                height: "40px",
                width: "40px",
                borderRadius: "50%",
              }}
            />
            <div
              style={{
                marginLeft: "15px",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "row",
                border: "0px",
                backgroundColor: "#eeeeee",
                width: "100%",
              }}
            >
              <input
                style={{
                  border: "0px",
                  width: "100%",
                  height: "90%",
                  padding:'10px',
                  backgroundColor: "#eee",
                  borderRadius: "10px",
                }}
                placeholder="Write a comment..."
              />
              <FontAwesomeIcon
                className="hover"
                style={{ alignSelf: "center", marginRight: "8px" }}
                icon={faFileImage}
              />
              <FontAwesomeIcon
                className="hover"
                style={{ alignSelf: "center", marginRight: "8px" }}
                icon={faFileVideo}
              />
              <FontAwesomeIcon
                className="hover"
                style={{ alignSelf: "center", marginRight: "8px" }}
                icon={faSmile}
              />
            </div>
            <FontAwesomeIcon
            size="2x"
              icon={faPaperPlane}
              style={{ alignSelf: "center", paddingLeft: "10px" }}
              className="hover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
