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
import '../styles/Post.css';

import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import Comment_Item from "./Comment_Item";
import axios from "axios";
import { useAuthHeader, useAuthUser } from "react-auth-kit";

function Post(props) {

  const [showcomments, setshowcomments] = useState(false);
  const [userLoading, setUserLoading] = useState(true);
  const [showsettings, setshowsettings] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const authHeader = useAuthHeader();
  const auth = useAuthUser();

  useEffect(() => {
    const getPostUserInfo = async () => {
      console.log(props.post)
      const user_id = props.post.user_id;

      await axios.get(`http://localhost:5500/api/user/${user_id}`, {
        headers: {
          authorization: authHeader().substring(7),
        },
      })
        .then((res) => {
          setUserInfo(res.data);

        }).catch((err) => {
          alert(err);
        }).finally(() => {
          setUserLoading(false);
        });
    }


    getPostUserInfo();

  }, [])

  if (userLoading) {
    return <div></div>
  }





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
            src={userInfo.avatar}
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
              {userInfo.name}
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
              {/* {props.post.User.current} */}
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
              {/* {ConvertMinutes(props.post.timeago)} ago */}
            </p>
          </div>
          {/* {props.post.User.id === 0 &&
            <div style={{ marginLeft: "auto", padding: "5px", position: 'relative' }}
            >
              <FontAwesomeIcon
                className="hover"
                icon={faEllipsisH}
                onClick={() => { setshowsettings(!showsettings) }}
                size="2x"
              />
              {showsettings && <div className="postSettingsBox">

                <div className="hover">Delete Post</div>
                <div className="hover">Hide Post</div>

              </div>}
            </div>
          } */}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: "5px",
            justifyContent: "space-between",
          }}
        >
          <p>{props.post.text}</p>
          {
            props.post.image &&
            <img
              src={props.post.img}
              style={{ maxHeight: "400px", maxWidth: "400px", margin: '0 auto' }}
            />
          }
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
              {/* {props.post.comments.length} Comments */}
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
          {/* {showcomments ? props.post.comments.map((comm) => <Comment_Item comment={comm} />) : null} */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignContent: "center",

              margin: "5px",
            }}
          >
            <img
              src={auth().avatar}
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
                  padding: '10px',
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
