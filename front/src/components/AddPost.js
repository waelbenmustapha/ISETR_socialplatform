import { faImage, faImages, faSmile, faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios';
import React from 'react'
import { useAuthUser } from 'react-auth-kit';
import { useState } from 'react/cjs/react.development';

function AddPost() {
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
      await axios.post('http://localhost:5500/api/post/add', {
        text: postText.current.value,
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
        <div
          style={{
            margin: '10px',
            display: "flex",
            flexDirection: "row",
            paddingLeft: "5px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>
            <FontAwesomeIcon
              className="hover"
              style={{ marginRight: "7px" }}
              icon={faVideo}
            />
            live video
          </span>
          <span>
            <FontAwesomeIcon
              className="hover"
              style={{ marginRight: "7px" }}
              icon={faImages}
            />
            Photo/Video
          </span>
          <span>
            <FontAwesomeIcon
              className="hover"
              style={{ marginRight: "7px" }}
              icon={faSmile}
            />
            Feeling
          </span>
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
