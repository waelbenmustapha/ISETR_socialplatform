import { faImage, faImages, faSmile, faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Oval } from  'react-loader-spinner'
import imageUpload from "../utils/ImageUpload";
import { LinkPreview } from '@dhaiwat10/react-link-preview';


import axios from 'axios';
import React from 'react'
import { useAuthUser } from 'react-auth-kit';
import { useRef, useState } from 'react/cjs/react.development';
import images from "../images/images.png"
function AddPost(props) {
  const [urlFound,setUrlFound]=useState(false);
const [elurl,setElUrl]=useState(null);
  function linkify(text) {
    var urlRegex =/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    if(urlRegex.test(text)){setUrlFound(true)}else{setUrlFound(false)}
    
    return text.replace(urlRegex, function(url) {
      setElUrl(url);
        return `"${url}"`
    });
}
  const hiddeninput = useRef(null);
const [loading,setloading]=useState(false);
  const [imgToAdd, setImgToAdd] = useState(null);
 
  const auth = useAuthUser()
const [text,setText]=useState("");
  const [submitLoading, setSubmitLoading] = useState(false);
  const handleSubmitPost = async (e) => {
    setSubmitLoading(true)
    e.preventDefault();
    if (text === "") {
      alert("Please enter a post");
      setSubmitLoading(false)
      return;
    } else {
      await axios.post('http://localhost:5500/api/post/', {
        text: text,
        image:imgToAdd,
        user_id: auth().id,
        group_id:props.groupid
      })
        .then((res) => {
          setImgToAdd(null);
props.getposts(0);
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
          onChange={(e)=>{setText(linkify(e.target.value))}}
            style={{
              marginLeft: "15px",
              borderRadius: "10px",
              border: "0px",
              padding: '5px',
              backgroundColor: "#eeeeee",
              width: "100%",
            }}

           
            placeholder="What's happening ?"
          />
        </div>
        {imgToAdd&&<img
          src={imgToAdd}
          style={{ maxHeight: "400px", maxWidth: "400px", margin: "0 auto",padding:'20px' }}
        />}
       {urlFound&&<LinkPreview url={elurl} width='350px' margin={"10px auto"} />}
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
