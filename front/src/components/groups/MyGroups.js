import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthUser } from 'react-auth-kit';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import dots from "../../images/dots.png"
import { Oval } from 'react-loader-spinner';
import GroupItem from '../../widgets/GroupItem';


function MyGroups() {
    const auth = useAuthUser();

    const [mygroups,setMygroups]=useState(null);
  
    function getMygroups(){
  console.log("fetching")
      axios.get(`http://localhost:5500/api/group/${auth().id}/groups`).then((res)=>{setMygroups(res.data.data);console.log(res.data.data)})
    }
  
    useEffect(() => {
     getMygroups();
    }, []);

    if (mygroups==null) {
        return <Oval
        heigth="40"
        width="40"
      
        color='grey'
        ariaLabel='loading'
      />

    }
  return <div style={{display:'flex',flexDirection:'column',justifyContent:'space-around',gap:'10px'}}>

{mygroups.map((el)=>{return <GroupItem mygroups={true} getgroups={getMygroups} items={el}/>})}


  </div>;
}

export default MyGroups;
