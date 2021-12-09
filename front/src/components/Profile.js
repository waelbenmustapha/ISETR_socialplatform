import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faComment,
  faEllipsisH,
  faFileImage,
  faFileVideo,
  faHeart,
  faImages,
  faPaperPlane,
  faShare,
  faSmile,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

function Profile() {
  return (
    <div style={{ marginLeft: "200px" }}>
      <div
        style={{
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          borderRadius: "10px 10px 5px 5px",
          paddingBottom: "10px",
        }}
      >
        <div class="hero-image">
          <img
            src="https://bootdey.com/img/Content/avatar/avatar6.png"
            style={{
              borderRadius: "50%",
              height: "150px",
              width: "150px",
              position: "absolute",
              border: "5px solid white",
              bottom: "0px",
              marginBottom: "-40px",
              left: "20px",
            }}
          />
          <p
            className="hover"
            style={{
              position: "absolute",
              right: "20px",
              bottom: "0px",
              backgroundColor: "white",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            Edit Cover Photo
          </p>
        </div>

        <p
          style={{
            marginTop: "40px",
            marginLeft: "20px",
            fontSize: "18px",
            fontWeight: "700",
            opacity: "0.75",
          }}
        >
          Med Wael Ben Mustapha
        </p>
        <p
          style={{
            marginLeft: "20px",
            fontSize: "13px",
            fontWeight: "700",
            opacity: "0.75",
          }}
        >
          Promotion 2018
        </p>
      </div>
      <div
        style={{
          backgroundColor: "#eeeeee",
          borderRadius: "10px",
          padding: "20px",

          display: "flex",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "10px",
            backgroundColor: "white",
          }}
        >
          <p style={{ fontWeight: "600", fontSize: "17px", opacity: "0.75" }}>
            INTRO
          </p>
          <p>
            <FontAwesomeIcon icon={faCoffee} />
            <span style={{ marginLeft: "15px" }}>male</span>
          </p>
          <p>
            <FontAwesomeIcon icon={faCoffee} />
            <span style={{ marginLeft: "15px" }}>Born mars 21 1999</span>
          </p>
          <p>
            <FontAwesomeIcon icon={faCoffee} />
            <span style={{ marginLeft: "15px" }}>Ben Arous, Tunis</span>
          </p>
          <p>
            <FontAwesomeIcon icon={faCoffee} />
            <span style={{ marginLeft: "15px" }}>LinkedIn</span>
          </p>
          <p>
            <FontAwesomeIcon icon={faCoffee} />
            <span style={{ marginLeft: "15px" }}>Facebook</span>
          </p>
          <p>
            <FontAwesomeIcon icon={faCoffee} />
            <span style={{ marginLeft: "15px" }}>2146 Follower</span>
          </p>
          <div
            className="hover"
            style={{
              width: "50%",
              margin: "30px auto",
              textAlign: "center",
              padding: "5px",
              borderRadius: "5px",
              backgroundColor: "#eeeeee",
            }}
          >
            Edit Details
          </div>
        </div>
        <div style={{ height: "100%", flex: 2 }}>
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
                  backgroundColor: "#eeeeee",
                  width: "100%",
                }}
                placeholder="What's happening ?"
              />
            </div>
            <div
              style={{
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
                  src="https://www.bootdey.com/img/Content/avatar/avatar6.png"
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
                    Med Wael Ben Mustapha
                  </p>
                  <p
                    style={{
                      fontWeight: "500",
                      fontSize: "13px",
                      opacity: "0.85",
                      paddingLeft: "5px",
                      margin: "0px",
                    }}
                  >
                    Just Now
                  </p>
                </div>
                <FontAwesomeIcon
                  icon={faEllipsisH}
                  style={{ marginLeft: "auto", padding: "5px" }}
                  className="hover"
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  paddingLeft: "5px",
                  justifyContent: "space-between",
                }}
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  nec dolor sollicitudin lectus ornare lacinia id eget ante.
                  Suspendisse malesuada, tellus ac laoreet ullamcorper, tortor
                  mauris imperdiet purus, vitae semper metus magna vitae neque.
                </p>
                <img
                  src="https://images.unsplash.com/photo-1569974498991-d3c12a504f95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmlnJTIwY2l0eXxlbnwwfHwwfHw%3D&w=1000&q=80"
                  style={{ maxHeight: "100%", maxWidth: "100%" }}
                />
                <div style={{ flexDirection: "row", display: "flex" }}>
                  <p style={{ fontSize: "14px", fontWeight: "500" }}>
                    720 Like
                  </p>
                  <p
                    style={{
                      marginLeft: "auto",
                      fontSize: "14px",
                      fontWeight: "500",
                      marginRight: "10px",
                    }}
                  >
                    3 Comments
                  </p>
                  <p style={{ fontSize: "14px", fontWeight: "500" }}>
                    17 Share
                  </p>
                </div>
                <span className="hr"></span>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "row",
                  }}
                >
                  <p>
                    <FontAwesomeIcon
                      className="hover"
                      style={{ marginRight: "7px" }}
                      icon={faHeart}
                    />
                    Like
                  </p>
                  <p>
                    <FontAwesomeIcon
                      className="hover"
                      style={{ marginRight: "7px" }}
                      icon={faComment}
                    />
                    Like
                  </p>
                  <p>
                    <FontAwesomeIcon
                      className="hover"
                      style={{ marginRight: "7px" }}
                      icon={faShare}
                    />
                    Like
                  </p>
                </div>
                <span className="hr"></span>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignContent: "center",

                    margin: "5px",
                  }}
                >
                  <img
                    src="https://www.bootdey.com/img/Content/avatar/avatar6.png"
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
                      style={{
                        border: "0px",
                        width: "100%",
                        height: "90%",
                        backgroundColor: "#eee",
                        borderRadius: "10px",
                      }}
                      placeholder="Write a comment..."
                    />
                    <FontAwesomeIcon
                      className="hover"
                      style={{ alignSelf: "center", marginRight: "8px" }}
                      icon={faFileImage}
                    />
                    <FontAwesomeIcon
                      className="hover"
                      style={{ alignSelf: "center", marginRight: "8px" }}
                      icon={faFileVideo}
                    />
                    <FontAwesomeIcon
                      className="hover"
                      style={{ alignSelf: "center", marginRight: "8px" }}
                      icon={faSmile}
                    />
                  </div>
                  <FontAwesomeIcon
                    icon={faPaperPlane}
                    style={{ alignSelf: "center", paddingLeft: "10px" }}
                    className="hover"
                  />
                </div>
              </div>
            </div>
          </div>
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
                  src="https://www.bootdey.com/img/Content/avatar/avatar6.png"
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
                    Med Wael Ben Mustapha
                  </p>
                  <p
                    style={{
                      fontWeight: "500",
                      fontSize: "13px",
                      opacity: "0.85",
                      paddingLeft: "5px",
                      margin: "0px",
                    }}
                  >
                    Just Now
                  </p>
                </div>
                <FontAwesomeIcon
                  icon={faEllipsisH}
                  style={{ marginLeft: "auto", padding: "5px" }}
                  className="hover"
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  paddingLeft: "5px",
                  justifyContent: "space-between",
                }}
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  nec dolor sollicitudin lectus ornare lacinia id eget ante.
                  Suspendisse malesuada, tellus ac laoreet ullamcorper, tortor
                  mauris imperdiet purus, vitae semper metus magna vitae neque.
                </p>
                <img
                  src="https://images.unsplash.com/photo-1569974498991-d3c12a504f95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmlnJTIwY2l0eXxlbnwwfHwwfHw%3D&w=1000&q=80"
                  style={{ maxHeight: "100%", maxWidth: "100%" }}
                />
                <div style={{ flexDirection: "row", display: "flex" }}>
                  <p style={{ fontSize: "14px", fontWeight: "500" }}>
                    720 Like
                  </p>
                  <p
                    style={{
                      marginLeft: "auto",
                      fontSize: "14px",
                      fontWeight: "500",
                      marginRight: "10px",
                    }}
                  >
                    3 Comments
                  </p>
                  <p style={{ fontSize: "14px", fontWeight: "500" }}>
                    17 Share
                  </p>
                </div>
                <span className="hr"></span>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "row",
                  }}
                >
                  <p>
                    <FontAwesomeIcon
                      className="hover"
                      style={{ marginRight: "7px" }}
                      icon={faHeart}
                    />
                    Like
                  </p>
                  <p>
                    <FontAwesomeIcon
                      className="hover"
                      style={{ marginRight: "7px" }}
                      icon={faComment}
                    />
                    Like
                  </p>
                  <p>
                    <FontAwesomeIcon
                      className="hover"
                      style={{ marginRight: "7px" }}
                      icon={faShare}
                    />
                    Like
                  </p>
                </div>
                <span className="hr"></span>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignContent: "center",

                    margin: "5px",
                  }}
                >
                  <img
                    src="https://www.bootdey.com/img/Content/avatar/avatar6.png"
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
                      style={{
                        border: "0px",
                        width: "100%",
                        height: "90%",
                        backgroundColor: "#eee",
                        borderRadius: "10px",
                      }}
                      placeholder="Write a comment..."
                    />
                    <FontAwesomeIcon
                      className="hover"
                      style={{ alignSelf: "center", marginRight: "8px" }}
                      icon={faFileImage}
                    />
                    <FontAwesomeIcon
                      className="hover"
                      style={{ alignSelf: "center", marginRight: "8px" }}
                      icon={faFileVideo}
                    />
                    <FontAwesomeIcon
                      className="hover"
                      style={{ alignSelf: "center", marginRight: "8px" }}
                      icon={faSmile}
                    />
                  </div>
                  <FontAwesomeIcon
                    icon={faPaperPlane}
                    style={{ alignSelf: "center", paddingLeft: "10px" }}
                    className="hover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            height: "100%",
            flex: 1,
            backgroundColor: "white",
            borderRadius: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <p
              style={{
                fontWeight: "600",
                fontSize: "15px",
                opacity: "0.75",
                padding: "5px",
              }}
            >
              You might know
            </p>
            <p
              style={{
                fontWeight: "600",
                fontSize: "13px",
                opacity: "0.75",
                padding: "5px",
                textAlign: "right",
                color: "blue",
              }}
            >
              See All
            </p>
          </div>
          <p style={{ margin: "0px" }} className="hr"></p>
          <div className="suggestedfriend"><div
            style={{
              margin: "10px",
              display: "flex",
              flexDirection: "row",
              alignContent: "center",
            }}
          >
            <img
              src="https://www.bootdey.com/img/Content/avatar/avatar6.png"
              style={{ height: "40px", width: "40px", borderRadius: "50%" }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              <p
                className="hover"
                style={{
                  fontWeight: "600",
                  fontSize: "14px",
                  opacity: "0.85",
                  paddingLeft: "5px",
                  margin: "0px",
                }}
              >
                Med Wael Ben Mustapha
              </p>
              <p
                style={{
                  fontWeight: "500",
                  fontSize: "13px",
                  opacity: "0.85",
                  paddingLeft: "5px",
                  margin: "0px",
                }}
              >
                Promotion 2018{" "}
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <div
              className="hover"
              style={{
                height: "30px",
                width: "80px",
                border: "1px solid #bbb",
                borderRadius: "5px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "700",
                color: "black",
                fontSize: "13px",
                opacity: "0.8",
              }}
            >
              Ignore
            </div>
            <div
              className="hover"
              style={{
                height: "30px",
                width: "80px",
                backgroundColor: "#377dff",
                borderRadius: "5px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "700",
                color: "white",
                fontSize: "13px",
              }}
            >
              Follow
            </div>
          </div></div> <div className="suggestedfriend"><div
            style={{
              margin: "10px",
              display: "flex",
              flexDirection: "row",
              alignContent: "center",
            }}
          >
            <img
              src="https://www.bootdey.com/img/Content/avatar/avatar6.png"
              style={{ height: "40px", width: "40px", borderRadius: "50%" }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              <p
                className="hover"
                style={{
                  fontWeight: "600",
                  fontSize: "14px",
                  opacity: "0.85",
                  paddingLeft: "5px",
                  margin: "0px",
                }}
              >
                Med Wael Ben Mustapha
              </p>
              <p
                style={{
                  fontWeight: "500",
                  fontSize: "13px",
                  opacity: "0.85",
                  paddingLeft: "5px",
                  margin: "0px",
                }}
              >
                Promotion 2018{" "}
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <div
              className="hover"
              style={{
                height: "30px",
                width: "80px",
                border: "1px solid #bbb",
                borderRadius: "5px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "700",
                color: "black",
                fontSize: "13px",
                opacity: "0.8",
              }}
            >
              Ignore
            </div>
            <div
              className="hover"
              style={{
                height: "30px",
                width: "80px",
                backgroundColor: "#377dff",
                borderRadius: "5px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "700",
                color: "white",
                fontSize: "13px",
              }}
            >
              Follow
            </div>
          </div></div> <div className="suggestedfriend"><div
            style={{
              margin: "10px",
              display: "flex",
              flexDirection: "row",
              alignContent: "center",
            }}
          >
            <img
              src="https://www.bootdey.com/img/Content/avatar/avatar6.png"
              style={{ height: "40px", width: "40px", borderRadius: "50%" }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              <p
                className="hover"
                style={{
                  fontWeight: "600",
                  fontSize: "14px",
                  opacity: "0.85",
                  paddingLeft: "5px",
                  margin: "0px",
                }}
              >
                Med Wael Ben Mustapha
              </p>
              <p
                style={{
                  fontWeight: "500",
                  fontSize: "13px",
                  opacity: "0.85",
                  paddingLeft: "5px",
                  margin: "0px",
                }}
              >
                Promotion 2018{" "}
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <div
              className="hover"
              style={{
                height: "30px",
                width: "80px",
                border: "1px solid #bbb",
                borderRadius: "5px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "700",
                color: "black",
                fontSize: "13px",
                opacity: "0.8",
              }}
            >
              Ignore
            </div>
            <div
              className="hover"
              style={{
                height: "30px",
                width: "80px",
                backgroundColor: "#377dff",
                borderRadius: "5px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "700",
                color: "white",
                fontSize: "13px",
              }}
            >
              Follow
            </div>
          </div></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
