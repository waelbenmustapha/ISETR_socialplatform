import {
  faImage,
  faImages,
  faSmile,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";
import axios from "axios";
import { useState } from "react/cjs/react.development";
function AddPost() {
  const hiddeninput = useRef(null);

  const [imgToAdd, setImgToAdd] = useState(null);
  function imgadd(files) {
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "StorkCloud");
    axios
      .post("https://api.cloudinary.com/v1_1/dq1i1g9th/image/upload", formData)
      .then((res) => {
        setImgToAdd(res.data.url);
        console.log(res.data.url);
      });
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
            src="https://www.bootdey.com/img/Content/avatar/avatar6.png"
            style={{ height: "40px", width: "40px", borderRadius: "50%" }}
          />
          <textarea
            style={{
              marginLeft: "15px",
              borderRadius: "10px",
              border: "0px",
              padding: "5px",
              backgroundColor: "#eeeeee",
              width: "100%",
            }}
            placeholder="What's happening ?"
          />
        </div>
        {imgToAdd&&<img
          src={imgToAdd}
          style={{ maxHeight: "400px", maxWidth: "400px", margin: "0 auto" }}
        />}
        <div
          style={{
            margin: "10px",
            display: "flex",
            flexDirection: "row",
            paddingLeft: "5px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            onClick={() => {
              hiddeninput.current.click();
            }}
          >
            <FontAwesomeIcon
              className="hover"
              style={{ marginRight: "7px" }}
              icon={faImages}
            />
            Photo/Video
            <input
              ref={hiddeninput}
              style={{ display: "none" }}
              type="file"
              onChange={(e) => imgadd(e.target.files)}
            />
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
          >
            Post
          </p>
        </div>
      </div>
    </div>
  );
}

export default AddPost;
