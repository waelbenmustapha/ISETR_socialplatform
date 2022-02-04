import { faImage, faImages, faSmile, faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Oval } from  'react-loader-spinner'
import imageUpload from "../utils/ImageUpload";

import axios from 'axios';
import React from 'react'
import { useAuthUser } from 'react-auth-kit';
import { useRef, useState } from 'react/cjs/react.development';
import images from "../images/images.png"
function AddPost() {
  const hiddeninput = useRef(null);
const [loading,setloading]=useState(false);
  const [imgToAdd, setImgToAdd] = useState(null);
 
  const auth = useAuthUser()
  const postText = React.createRef();
  const [submitLoading, setSubmitLoading] = useState(false);
  const handleSubmitPost = async (e) => {
    setSubmitLoading(true)
    e.preventDefault();
    if (postText.current.value.trim() === "") {
      alert("Please enter a post");
      setSubmitLoading(false)
      return;
    } else {
      await axios.post('http://localhost:5500/api/post/', {
        text: postText.current.value,
        image:imgToAdd,
        user_id: auth().id,
      })
        .then((res) => {
          console.log(res);
          alert("Post create successfully!!");

        }).catch((err) => {
          alert(err);
        }).finally(() => {
          setSubmitLoading(false);
        });

    }


  }

  if (submitLoading) {
    return <div>Loading</div>
  }


  return (
    <div>
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "10px",
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
            src={auth().avatar}
            style={{ height: "40px", width: "40px", borderRadius: "50%" }}
          />
          <input
            style={{
              marginLeft: "15px",
              borderRadius: "10px",
              border: "0px",
              padding: '5px',
              backgroundColor: "#eeeeee",
              width: "100%",
            }}

            ref={postText}
            placeholder="What's happening ?"
          />
        </div>
        {imgToAdd&&<img
          src={imgToAdd}
          style={{ maxHeight: "400px", maxWidth: "400px", margin: "0 auto",padding:'20px' }}
        />}
        <div
          style={{
            margin: '10px',
            display: "flex",
            flexDirection: "row",
padding:'15px 15px 0px 15px',
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
        
       {loading ==false ? <span
       className='hovercolorblue'
            onClick={() => {
              hiddeninput.current.click();
            }}
          >
           <img src={images} style={{height:'25px',width:'25px',display:'inline'}}/>
           <a> Photo/Video</a>
            <input
              ref={hiddeninput}
              style={{ display: "none" }}
              type="file"
              onChange={(e) =>{ imageUpload(e.target.files,setImgToAdd,setloading)}}
            />
          </span>:<Oval
    heigth="40"
    width="40"
  
    color='grey'
    ariaLabel='loading'
  />}
         
          <p
            className="hover"
            style={{
              width: "80px",
              height: "40px",
              lineHeight: "40px",
              textAlign: "center",
              backgroundColor: "#377dff",
              borderRadius: "8px",
              color: "white",
              fontWeight: "500",
            }}

            onClick={handleSubmitPost}
          >
            Post
          </p>
        </div>
      </div>
    </div>
  )
}

export default AddPost;
