import React from 'react'

function Comment_Item(props) {

    function ConvertMinutes(num){
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

    return (
        <div style={{backgroundColor:'#ccc',padding:'10px',margin:'15px',borderRadius:'10px'}}>
            <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}><img
              src={props.comment.User.img}
              style={{
                height: "40px",
                width: "40px",
                borderRadius: "50%",
              }}
            /> <p style={{marginLeft:'10px'}}>{props.comment.User.name}</p>
            <p style={{marginLeft:'auto'}}>{ConvertMinutes(props.comment.timeago)} ago</p></div>

            <p>{props.comment.comment}</p>
        </div>
    )
}

export default Comment_Item
