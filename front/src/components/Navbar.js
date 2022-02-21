import React from "react";
import isetrlogo from "../images/isetrlogo.jpg";
import homeico from "../images/home.png";
import networking from "../images/networking.png";
import avatar from "../images/avatar.jpg";
import chat from "../images/chat.png";
import bell from "../images/bell.png";
import group from "../images/group.png"
import magnifier from "../images/magnifier.png";
import suitcase from "../images/suitcase.png";
import { useAuthUser,useSignOut } from "react-auth-kit";
import { useHistory, useLocation } from "react-router-dom";
function Navbar() {
    const history = useHistory();
    const signOut = useSignOut()

    const auth = useAuthUser();
    const location = useLocation();
  return (
    <div
      className="navshadow"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 5,
        height: "50px",
        background: "white",
        borderBottom: "1px solid #ccc",
      }}
    >
      <div
        style={{
          width: "1100px",
          margin: "0px auto",
          display: "flex",
          flexDirection: "row",
          maxHeight: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "5px",
        }}
      >
        <img
        onClick={()=>history.push("/feed")}
        className="hover"
          src={isetrlogo}
          height={40}
          width={40}
          style={{ borderRadius: "50%" }}
        />
       <div style={{display:'flex',flexDirection:'row',alignItems:'center',  width: "300px",
            height: "35px",
            borderRadius: "8px",
            backgroundColor: "#eef3f8",}}> 
       <input
          placeholder="Search"
          style={{
          width:'90%',
          backgroundColor:'#eef3f8',
          borderRadius:'8px',
          paddingLeft:'15px',
          height:'100%'
          }}
        />
        <img className="hovercolor" src={magnifier} style={{height:'20px',width:'20px',marginLeft:'5px'}}/>
        </div>
        <div
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: "30px",
          }}
        >
         <div onClick={()=>history.push("/feed")}  className={location.pathname=="/feed"?'selectedico':'hovercolor'}><img src={homeico} style={{height:'25px',width:'25px',margin:'0px auto'}}/>
       <p style={{fontWeight:'400',fontSize:'10px'}}>Home</p></div>
       
       
       <div onClick={()=>history.push("/my-commynity")} className={location.pathname=="/my-commynity"?'selectedico':'hovercolor'}><img src={networking} style={{height:'25px',width:'25px',margin:'0px auto'}}/>
       <p style={{opacity:0.7,fontWeight:'400',fontSize:'10px'}}>People</p></div>

       <div onClick={()=>history.push("/mygroups")} className={location.pathname=="/mygroups"?'selectedico':'hovercolor'}><img src={group} style={{height:'25px',width:'25px',margin:'0px auto'}}/>
       <p style={{opacity:0.7,fontWeight:'400',fontSize:'10px'}}>My Groups</p></div>

       <div onClick={()=>history.push("/jobs")}  className={location.pathname=="/jobs"?'selectedico':'hovercolor'}><img src={suitcase} style={{height:'25px',width:'25px',margin:'0px auto'}}/>
       <p style={{opacity:0.7,fontWeight:'400',fontSize:'10px'}}>Jobs</p></div>

       <div onClick={()=>history.push("/messages")} className={location.pathname=="/messages"?'selectedico':'hovercolor'}><img src={chat} style={{height:'25px',width:'25px',margin:'0px auto'}}/>
       <p style={{opacity:0.7,fontWeight:'400',fontSize:'10px'}}>Messages</p></div>

       <div onClick={()=>history.push("/notifications")} className={location.pathname=="/notifications"?'selectedico':'hovercolor'}><img src={bell} style={{height:'25px',width:'25px',margin:'0px auto'}}/>
       <p style={{opacity:0.7,fontWeight:'400',fontSize:'10px'}}>Notifications</p></div>

       <div
              style={{ position: "relative" }}
             className="showonhover"
            
            >
              <img  onClick={() => {
                history.push("/compte");
              }} className="centerimg" src={auth().avatar}  style={{borderRadius:'50%',height:'37px',width:'37px'}} />

             
             
                <div
                  className="toshow"
                  style={{
                    height: "250px",
                    color: "black",
                    width: "200px",
                    position: "absolute",
                    right: "0px",
                    backgroundColor: "white",
                    borderRadius: "8px",
                    flexDirection: "column",
                    justifyContent: "space-around",
                  }}
                >
                  <div
                    style={{
                      padding: "15px",
                      fontWeight: "500",
                      display: "flex",
                      alignItems:'center',
                      flexDirection: "row",
                    }}
                  >
                    <img
                      src={auth().avatar}
                      height={50}
                      width={50}
                      style={{ borderRadius: "50%" }}
                    />
                    <p style={{ fontWeight: "500", fontSize: "14px",marginLeft:'10px',opacity:'0.8'}}>
{auth().name}</p>
                  </div>
                  <div className="listacc">
                  <a onClick={()=>history.push("/settings")}>Account</a>
                  <a onClick={()=>history.push("/profile")}>Portfolio</a>
    <a onClick={()=>history.push("/wall")}>My Wall</a>
    <a onClick={()=>signOut()}>Sign Out</a>
    </div>
                </div>
              
            </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
