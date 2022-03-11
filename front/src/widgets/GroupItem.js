import axios from 'axios';
import React, { useState } from 'react';
import { useAuthUser } from 'react-auth-kit';
import { useHistory } from 'react-router-dom';
import dots from "../images/dots.png"
function GroupItem(props) {
    const auth = useAuthUser();
const [showsett,setshowsett]=useState(false);
let history = useHistory();
     
function joingroup(){

    axios.post(`http://localhost:5500/api/group/add-group-member`,{user_id:auth().id,group_id:props.items.id}).then((res)=>props.setselected("first"))

}

function leavegroup(){

    axios.delete(`http://localhost:5500/api/group/delete-member/${auth().id}/${props.items.id}`).then((res)=>{props.getgroups()})
}

function deletegroup(){

    axios.delete(`http://localhost:5500/api/group/${props.items.id}`).then((res)=>{props.getgroups()})
}

  return <div className='hovercolorbluenofilter'>

  <img className='hover' src={props.items.image} style={{height:'60px',width:'60px',borderRadius:'5px'}}/>
  <p className='hover' onClick={()=>history.push(`/group/${props.items.id}`)} style={{marginLeft:'10px',fontSize:'15px',fontWeight:'500'}}>{props.items.name}</p> {((props.items.admin_id==auth().id)&&props.mygroups)?<p style={{paddingRight:'5px',paddingLeft:'5px',marginLeft:'10px',backgroundColor:'#0A363F',color:'white',borderRadius:'5px'}}>Owner</p>:((props.items.admin_id!==auth().id)&&props.mygroups)?<p style={{paddingRight:'5px',paddingLeft:'5px',marginLeft:'10px',backgroundColor:'#0A363F',color:'white',borderRadius:'5px'}} >Member</p>:null}
 <div style={{position:'relative',marginLeft:'auto'}}> <img className='hovercolorblue' onClick={()=>setshowsett(!showsett)} src={dots} style={{height:'25px',width:'25px'}}/>
 {showsett&&<div style={{width:'150px',position:'absolute',backgroundColor:'#ccc',right:'0px'}}>
   {props.mygroups?<p onClick={()=>{leavegroup();}} className='hovera' style={{color:'black',padding:'10px',textAlign:'center',fontWeight:'400'}}>Leave Group</p>:<p onClick={()=>{joingroup();}} className='hovera' style={{color:'black',padding:'10px',textAlign:'center',fontWeight:'400'}}>Join group</p>}
     {props.items.admin_id==auth().id?<p  onClick={()=>{deletegroup();}} className='hovera' style={{color:'black',padding:'10px',fontWeight:'400',textAlign:'center'}}>Delete Group</p>:null}
     
     </div>}
 </div>
  
  </div>
}

export default GroupItem;
