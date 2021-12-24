import { faImage, faImages, faSmile, faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function AddPost() {
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
              <input
                style={{
                  marginLeft: "15px",
                  borderRadius: "10px",
                  border: "0px",
                  padding:'5px',
                  backgroundColor: "#eeeeee",
                  width: "100%",
                }}
                placeholder="What's happening ?"
              />
            </div>
            <div
              style={{
                  margin:'10px',
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
              >
                Post
              </p>
            </div>
          </div>
        </div>
    )
}

export default AddPost
