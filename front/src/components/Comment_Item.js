import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Comment_Item(props) {
  
const [user, setUser] = useState(null)
function getUser(){
 
  axios.get(`http://localhost:5500/api/user/${props.comment.user_id}`).then((res)=>{setUser(res.data)});
}
useEffect(() => {
 
  getUser();
}, [])


    function ConvertMinutes(date){
      var today = new Date();
      var postdate = new Date(date);
     var diff=today-postdate;
      var num = Math.floor((diff/1000)/60);

        var d = Math.floor(num/1440); // 60*24
        var h = Math.floor((num-(d*1440))/60);
        var m = Math.round(num%60);
       
         if(d>0){
           return(d + " days, " + h + " hours, "+m+" minutes");
         }else if(h>0){
           return(h + " hours, "+m+" minutes");
         }
         else{
           return(m+" minutes");
       
         }
       }
       if(user==null){
         return(<div>Loading</div>)
       }
else{
    return (
        <div style={{backgroundColor:'#efefef',padding:'10px',margin:'15px',borderRadius:'10px',border:'1px solid #119D90'}}>
            <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}><img
              src={user.avatar}
              style={{
                height: "40px",
                width: "40px",
                borderRadius: "50%",
              }}
            /> <p style={{marginLeft:'10px'}}>{user.name}</p>
            <p style={{marginLeft:'auto'}}>{ConvertMinutes(props.comment.date)} ago</p></div>

            <p style={{padding:'8px',margin:'8px',borderRadius:'5px',fontSize:'14px',border:'1px solid #119D90',backgroundColor:'white'}}>{props.comment.comment}</p>
        </div>
    )
}}

export default Comment_Item
