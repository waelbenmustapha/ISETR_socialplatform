import { useAuthUser, useIsAuthenticated } from "react-auth-kit";
import React, { useState, useRef, useEffect } from "react";
import axios from 'axios'
import AddPost from "../components/AddPost";
import Post from "../components/Post";

function Feed() {
  const [limit, setlimit] = useState(3);
  const auth = useAuthUser();

  function handleScroll(e) {
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) { setlimit(limit + 3) }
  }
  const [isLoading, setIsLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [posts, setPosts] = useState([]);
  const isAuthenticated = useIsAuthenticated();


  const getPosts = async (offset) => {
    setIsLoading(true);
    await axios.get(`http://localhost:5500/api/post/feed/${auth().id}?page=${offset}`)
      .then(res => {
        if (res.data.success) {

          setPosts(res.data.data);
        }
      }).catch(err => {
        alert(err);
      }).finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    getPosts(offset);

  }, [offset]);

  if (isLoading) {
    return <h1>Loading...</h1>

  }

  return (
    <div onScroll={(e) => handleScroll(e)} className="col-start-2 col-end-6  row-start-2 row-end-10 rounded-lg shadow-2xl bg-gray-100 p-3  overflow-y-scroll no-scrollbar">
      <div style={{ display: "flex", flexDirection: "row", gap: "10px" }} >
        <div style={{ flex: "3" }}  >
          <AddPost />

          {/* {posts.slice(0, limit).map((val) => (
            <Post post={val} />
          ))} */}

          {
            posts.map((post) => {

              return <Post post={post} />
            })}
        </div>
        <div style={{ border: "1px solid", flex: "1" }}>EVENTS</div>
      </div>
    </div>
  );
}


export default Feed;
