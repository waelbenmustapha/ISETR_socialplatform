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
function Userprofile() {
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
                    src="https://www.bootdey.com/img/Content/avatar/avatar2.png"
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
                  Mohamed Aziz Sliti
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
                <p>
                    <button
                        className="hover"
                        style={{
                          width: "80px",
                          height: "40px",
                          textAlign: "center",
                          backgroundColor: "#377dff",
                          borderRadius: "30px",
                          color: "white",
                          marginLeft:"20px",
                        }}
                      >
                       +Follow
                      </button>
                      <button disabled="true"
                        className="hover"
                        style={{
                          width: "80px",
                          height: "40px",
                          textAlign: "center",
                          borderRadius: "30px",
                          marginLeft:"10px",
                        }}
                      >               

                       Message
                      </button>
                      <button
                        className="hover"
                        style={{
                          width: "80px",
                          height: "40px",
                          textAlign: "center",
                          borderRadius: "30px",
                          marginLeft:"10px",
                        }}
                      >
                       More
                      </button>
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
                  <p style={{ fontWeight: "600", fontSize: "17px", opacity: "0.75" }}>
               About
                  </p>
                  <p style={{fontSize:15, opacity: "0.75" }}>I m a mobile application developer, I got my diploma in computer science in 2021 and now i completing my master in mobile applications development in ISET RADES</p>
                </div>
                <div style={{ height: "100%", flex: 2 }}>
  
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
          
                      >
                                 <p style={{ fontWeight: "600", fontSize: "17px", opacity: "0.75" }}>
                                 Experience               </p>
                     <div              style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-around",
                        }}>
                         <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOyn0ZtpZeYudi6ZNfad2jiGjvJwdRni0fVg&usqp=CAU" style={{width:"150px"}}></img></div>
                         <div style={{marginLeft:"20px",fontSize:15,fontFamily:"Monaco"}}>
                                <p> Cyber Security ConsultantCyber Security Consultant</p>
                                    <p> EY · Full-timeEY · Full-time</p>
                                     <p>Feb 2020 - Jun 2021 · 1 yr 5 mosFeb 2020 - Jun 2021 · 1 yr 5 mos</p>
                                    <p>Tunisie</p>
                                 </div>
                     </div>
                     <div              style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-around",
                        }}>
                         <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOyn0ZtpZeYudi6ZNfad2jiGjvJwdRni0fVg&usqp=CAU" style={{width:"150px"}}></img></div>
                         <div style={{marginLeft:"20px",fontSize:15,fontFamily:"Monaco"}}>
                                <p> Cyber Security ConsultantCyber Security Consultant</p>
                                    <p> EY · Full-timeEY · Full-time</p>
                                     <p>Feb 2020 - Jun 2021 · 1 yr 5 mosFeb 2020 - Jun 2021 · 1 yr 5 mos</p>
                                    <p>Tunisie</p>
                                 </div>
                     </div>
                     <div              style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-around",
                        }}>
                         <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOyn0ZtpZeYudi6ZNfad2jiGjvJwdRni0fVg&usqp=CAU" style={{width:"150px"}}></img></div>
                         <div style={{marginLeft:"20px",fontSize:15,fontFamily:"Monaco"}}>
                                <p> Cyber Security ConsultantCyber Security Consultant</p>
                                    <p> EY · Full-timeEY · Full-time</p>
                                     <p>Feb 2020 - Jun 2021 · 1 yr 5 mosFeb 2020 - Jun 2021 · 1 yr 5 mos</p>
                                    <p>Tunisie</p>
                                 </div>
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
                      src="https://www.bootdey.com/img/Content/avatar/avatar2.png"
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
                        Mohamed Aziz Sliti
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
                      src="https://www.bootdey.com/img/Content/avatar/avatar2.png"
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
                        Mohamed Aziz Sliti
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
                      src="https://www.bootdey.com/img/Content/avatar/avatar2.png"
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
                        Mohamed Aziz Sliti
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
    )
}

export default Userprofile
