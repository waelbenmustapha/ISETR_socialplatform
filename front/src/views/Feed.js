import { useAuthUser, useIsAuthenticated } from "react-auth-kit";
import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import AddPost from "../components/AddPost";
import Post from "../components/Post";
import { useHistory } from "react-router-dom";

function Feed() {
  const [limit, setlimit] = useState(3);
  const auth = useAuthUser();
  let history = useHistory();
  function handleScroll(e) {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      setlimit(limit + 3);
    }
  }

  const [isLoading, setIsLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [posts, setPosts] = useState([]);
  const [mygroups, setMygroups] = useState([]);
  const isAuthenticated = useIsAuthenticated();
  function getMygroups() {
    console.log("fetching");
    axios
      .get(`http://localhost:5500/api/group/${auth().id}/groups`)
      .then((res) => {
        setMygroups(res.data.data);
        console.log(res.data.data);
      });
  }

  const getPosts = async (offset) => {
    setIsLoading(true);
    await axios
      .get(`http://localhost:5500/api/post/feed/${auth().id}?page=${offset}`)
      .then((res) => {
        if (res.data.success) {
          console.log(res.data);
          setPosts(res.data.data);
        }
      })
      .catch((err) => {
        alert(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getPosts(offset);
    getMygroups();
  }, [offset]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div style={{ padding: "25px" }}>
      <div
        onScroll={(e) => handleScroll(e)}
        style={{ width: "1200px", margin: "0px auto" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            justifyContent: "center",
          }}
        >
          <div style={{ width: "240px", backgroundColor: "white",borderRadius:'8px' }}>
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
                Groups
              </a>{" "}
              {mygroups.map((el) => (
                <p onClick={()=>history.push(`/group/${el.id}`)} className="hoverline" style={{fontSize:'14px',opacity:'0.85',padding:'3px'}}>{el.name}</p>
              ))}
            </div>
          </div>
          <div style={{ minWidth: "600px", maxWidth: "600px" }}>
            <AddPost getposts={getPosts} />

            {/* {posts.slice(0, limit).map((val) => (
            <Post post={val} />
          ))} */}

            {posts.map((post) => {
              return <Post post={post} />;
            })}
          </div>
          <div
            style={{
              borderRadius: "8px",
              width: "240px",
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ borer: "1px solid" }}>
              <p>event 1</p>
              <p>time</p>
            </div>

            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;
