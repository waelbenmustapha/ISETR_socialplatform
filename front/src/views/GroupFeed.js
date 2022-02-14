import axios from "axios";
import React, { useEffect } from "react";
import { useAuthUser } from "react-auth-kit";
import { useHistory, useParams } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import AddPost from "../components/AddPost";
import Post from "../components/Post";
import dots from "../images/dots.png";
function GroupFeed() {
  const [mygroups, setMygroups] = useState([]);
  const [posts, setposts] = useState([]);
  const [members, setMembers] = useState([]);

  const [reload, setReload] = useState(true);
  const history = useHistory();
  const [thisgroup, setThisgroup] = useState(null);
  const auth = useAuthUser();
  const params = useParams();

  function getmembers() {
    axios
      .get(`http://localhost:5500/api/group/${params.id}/group-members`)
      .then((res) => setMembers(res.data.data));
  }
  function groupposts() {
    axios
      .get(`http://localhost:5500/api/post/group-posts/${params.id}`)
      .then((res) => setposts(res.data.data));
  }

  function getThisGroup() {
    axios
      .get(`http://localhost:5500/api/group/${params.id}`)
      .then((res) => setThisgroup(res.data.data));
  }
  function getMygroups() {
    console.log("fetching");
    axios
      .get(`http://localhost:5500/api/group/${auth().id}/groups`)
      .then((res) => {
        setMygroups(res.data.data);
      });
  }

  useEffect(() => {
    groupposts();
    getmembers();
    getThisGroup();
    getMygroups();
  }, [reload]);

  if (!thisgroup) {
    return <div>Loading...</div>;
  } else {
    return (
      <div
        style={{
          width: "1160px",
          margin: "0px auto",
          marginTop: "25px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            width: "225px",
            backgroundColor: "white",
            borderRadius: "8px",
          }}
        >
          <div style={{ position: "relative" }}>
            <img
              src="https://static-exp1.licdn.com/sc/h/55k1z8997gh8dwtihm11aajyq"
              style={{ borderRadius: "8px 8px 0px 0px" }}
            />
            <img
              src={auth().avatar}
              style={{
                width: "70px",
                height: "70px",
                position: "absolute",
                top: "20px",
                marginLeft: "auto",
                marginRight: "auto",
                left: "0px",
                right: "0px",
                borderRadius: "50%",
                border: "2px solid white",
              }}
            />
            <p
              style={{
                marginTop: "35px",
                textAlign: "center",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              {auth().name}
            </p>
          </div>

          <div style={{ padding: "15px" }}>
            <a
              className="hover"
              onClick={() => history.push("/mygroups")}
              style={{
                fontWeight: "500",
                fontSize: "14px",
                color: "#0073b1",
              }}
            >
              Other Groups
            </a>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {mygroups.map((el) => (
                <a
                  rel="noopener noreferrer"
                  href={`http://localhost:3000/group/${el.id}`}
                  target="_blank"
                  onClick={(e) => {
                    history.push(`/group/${el.id}`);
                    setReload(!reload);
                    e.preventDefault();
                  }}
                  className="hoverline"
                  style={{ fontSize: "14px", opacity: "0.85", padding: "3px" }}
                >
                  {el.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div
          style={{
            width: "650px",
            borderRadius: "8px",
          }}
        >
          <div style={{ backgroundColor: "white", borderRadius: "8px" }}>
            <div style={{ position: "relative" }}>
              <img
                src="https://static-exp1.licdn.com/sc/h/68ao3xk5x5pa9fwrs0al41kf0"
                style={{ borderRadius: "8px 8px 0px 0px" }}
              />
              <img
                src={thisgroup.image}
                style={{
                  position: "absolute",
                  height: "100px",
                  width: "100px",
                  top: "105px",
                  left: "20px",
                }}
              />
            </div>
            <img
              className="hovercolororange"
              src={dots}
              style={{
                float: "right",
                height: "25px",
                width: "25px",
                margin: "15px",
              }}
            />
            <p
              style={{
                marginTop: "30px",
                padding: "15px",
                fontSize: "24px",
                fontWeight: "500",
                fontFamily: "sans-serif",
              }}
            >
              {thisgroup.name}
            </p>
          </div>
          <div style={{ marginTop: "20px" }}>
            <AddPost groupid={params.id} getposts={groupposts} />
          </div>
          <div style={{ backgroundColor: "white", marginTop: "20px" }}>
            {" "}
            {posts.map((post) => {
              return <Post post={post} />;
            })}
          </div>
        </div>
        <div
          style={{
            width: "250px",
            borderRadius: "8px",
          }}
        >
          <div style={{ backgroundColor: "white", borderRadius: "8px" }}>
            <div style={{ padding: "5px", marginBottom: "20px" }}>
              <a style={{ fontSize: "14px", fontWeight: "500" }}>
                {" "}
                {members.length} members
              </a>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                  paddingTop: "20px",
                }}
              >
                {members.slice(0, 4).map((el) => (
                  <img
                    src={el.avatar}
                    style={{
                      height: "40px",
                      width: "40px",
                      borderRadius: "50%",
                    }}
                  />
                ))}
                <a
                  style={{
                    height: "40px",
                    width: "40px",
                    borderRadius: "50%",
                    border: "1px solid #ccc",
                    lineHeight: "40px",
                    textAlign: "center",
                    opacity: "0.85",
                  }}
                >
                  +{members.length > 4 ? members.length - 4 : "0"}
                </a>
              </div>
            </div>{" "}
            <p
              className="hovercolororange"
              style={{
                borderTop: "1px solid #ddd",
                padding: "10px",
                marginTop: "30px",
                textAlign: "center",
                fontSize: "16px",
                fontWeight: "500",
                opacity: "0.85",
              }}
            >
              See All
            </p>
          </div>
          <div style={{backgroundColor:'white',borderRadius:'8px',padding:'15px',marginTop:'20px'}}><p style={{marginBottom:'10px'}}>About this group</p><p style={{fontSize:'14px'}}>{thisgroup.description}</p></div>
        </div>
      </div>
    );
  }
}

export default GroupFeed;
