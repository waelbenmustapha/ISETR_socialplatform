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
import dots from "../images/dots.png";
import like from "../images/like.png"
import comment from "../images/comment.png"
import share from "../images/share.png"
import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import Comment_Item from "./Comment_Item";
import axios from "axios";
import { useAuthHeader, useAuthUser } from "react-auth-kit";

function Post(props) {
  const [deleted,setDeleted]=useState(false);
const [minutes,setminutes]=useState(0);
  const [showcomments, setshowcomments] = useState(false);
  const [userLoading, setUserLoading] = useState(true);
  const [comments,setComments]=useState([]);
  const [liked,setLiked]=useState(false);
  const [commentToAdd,setCommentToAdd]=useState("");
  const [showsettings, setshowsettings] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const authHeader = useAuthHeader();
  const auth = useAuthUser();
 function getcomments(){

    axios.get(`http://localhost:5500/api/comment/post-comments/${props.post.id}`).then((res)=>setComments(res.data))
  
  }
  function likePost(){
    axios.post(`http://localhost:5500/api/post/like`,{"post_id":props.post.id,"user_id":auth().id}).then((res)=>console.log(res))
    
  }
  function addComment(){
    axios.post(`http://localhost:5500/api/comment/`,{"post_id":props.post.id,"user_id":auth().id,"comment":commentToAdd}).then((res)=>{console.log(res);getcomments();setCommentToAdd("")})

  }
  function deletepost(){

    axios.delete(`http://localhost:5500/api/post/${props.post.id}`).then((res)=>setDeleted(true))

  }
  useEffect(() => {
    getcomments();
    const getPostUserInfo = async () => {
      console.log(props.post)

      var sqldate = new Date(props.post.date);
      var currentTime = new Date();

      var difference=currentTime-sqldate;
      var minutes = Math.floor((difference/1000)/60);
setminutes(minutes);
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

  if (userLoading||userInfo==null) {
    return <div></div>
  }


if(deleted){
  return<div></div>
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
                fontSize: "10px",
                opacity: "0.85",
                paddingLeft: "10px",
                margin: "0px",
              }}
            >
             Full Stack Developer
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
              
            {ConvertMinutes(minutes)} ago 
            </p>
          </div>
          {props.post.user_id === auth().id &&
            <div style={{ marginLeft: "auto", padding: "5px", position: 'relative' }}
            >
            <img className="hovercolorblue" onClick={() => { setshowsettings(!showsettings) }}
 src={dots} style={{height:'25px',widhth:'25px'}} />
              {showsettings && <div className="postSettingsBox">

                <div className="hovera" onClick={()=>{deletepost()}} ><p>Delte Post</p></div>
                <div className="hovera" >Hide Post</div>

              </div>}
            </div>
          } 
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: "5px",
            justifyContent: "space-between",
          }}
        >
          <p style={{padding:'25px'}}>{props.post.text}</p>
          {
            props.post.image &&
            <img
              src={props.post.image}
              style={{ maxHeight: "400px", maxWidth: "600px", margin: '0 auto' }}
            />
          }
          <div style={{ flexDirection: "row", display: "flex" }}>
            <p style={{ fontSize: "14px", fontWeight: "500" }}>
              {props.post.likes}74 Like
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
               {comments.length} Comments 
            </p>
            <p style={{ fontSize: "14px", fontWeight: "500" }}>
             15 {props.post.shares} Share
            </p>
          </div>
          <span className="hr"></span>
          <div
            style={{
              padding:'10px',
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <div className={liked?"liked":"hovercolororange"}  onClick={()=>{likePost();setLiked(!liked)}} style={{display:'flex',flexDirection:'row',alignContent:'center',alignItems:'center'}}><img src={like} style={{height:'20px',width:'20px'}}/><a  style={{opacity:'0.8',fontSize:'13px',marginLeft:'5px'}}>
              Like
            </a></div>

            <div className="hovercolororange" onClick={() => setshowcomments(!showcomments)} style={{display:'flex',flexDirection:'row',alignContent:'center',alignItems:'center'}}><img src={comment} style={{height:'20px',width:'20px'}}/><a  style={{opacity:'0.8',fontSize:'13px',marginLeft:'5px'}}>
              Comment
            </a></div>
            <div className="hovercolororange"  style={{display:'flex',flexDirection:'row',alignContent:'center',alignItems:'center'}}><img src={share} style={{height:'20px',width:'20px'}}/><a  style={{opacity:'0.8',fontSize:'13px',marginLeft:'5px'}}>
              Share
            </a></div>
          </div>
          <span className="hr"></span>
           {showcomments ? comments.map((comm) => <Comment_Item comment={comm} />) : null} 
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
              onChange={(e)=>setCommentToAdd(e.target.value)}
              value={commentToAdd}
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
             
            </div>
            <FontAwesomeIcon
              size="2x"
              onClick={()=>addComment()}
              icon={faPaperPlane}
              style={{ alignSelf: "center", paddingLeft: "10px" }}
              className="hovercolororange"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
