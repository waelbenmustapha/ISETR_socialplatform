import React, { useEffect, useState } from "react";
import Notification_Item from "../components/Notification_Item";
import "../App.css"
import axios from "axios";
import { useAuthUser } from "react-auth-kit";
function Notifications() {

  const [notifs,setNotifs]=useState([]);
const auth=useAuthUser();

  function getnotifs(){

    axios.get(`http://localhost:5500/api/notif/${auth().id}`).then((res)=>{console.log("el notifs are");console.log(res.data.data);setNotifs(res.data.data)})
  }

  useEffect(() => {
  
    getnotifs();
  }, [])
  
  
  return (
    <div className="col-start-2 col-end-6  row-start-2 row-end-10 rounded-lg shadow-2xl bg-gray-100 p-3  overflow-y-scroll no-scrollbar">
    <div className="hover" style={{backgroundColor:'white',width:'600px',margin:'0 auto',borderRadius:'15px',padding:'10px'}} >
    <p style={{fontSize:'17px',fontWeight:'500'}}>Notifications</p>
    {notifs.map((el)=><Notification_Item notifid={el.id} user={{name:el.name,img:el.avatar}} postid={el.post_id} date={el.date} subject={el.type} seen={el.seen}/>)}
    </div>



    </div>
  );
}

export default Notifications;
