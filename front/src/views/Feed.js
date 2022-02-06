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
console.log(res.data)
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
    <div onScroll={(e) => handleScroll(e)} style={{width:'1200px',margin:'0px auto'}} className="col-start-2 col-end-6  row-start-2 row-end-10 rounded-lg shadow-2xl bg-gray-100 p-3  overflow-y-scroll no-scrollbar">
      <div style={{ display: "flex", flexDirection: "row", gap: "10px" }} >
       <div style={{flex:2,backgroundColor:'white'}}></div>
        <div style={{ flex: "4",minWidth:'600px' }}  >
          <AddPost />

          {/* {posts.slice(0, limit).map((val) => (
            <Post post={val} />
          ))} */}

          {
            posts.map((post) => {

              return <Post post={post} />
            })}
        </div>
        <div style={{ borderRadius:'8px', flex: "2" ,backgroundColor:'white',display:'flex',flexDirection:'column'}}>
        <div style={{borer:'1px solid'}}>
<p>event 1</p>
<p>time</p>
          </div>
          
           
          <div>

</div>

        </div>
      </div>
    </div>
  );
}


export default Feed;
