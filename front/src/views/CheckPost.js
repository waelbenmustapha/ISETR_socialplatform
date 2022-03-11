import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Post from '../components/Post'

function CheckPost() {
const [post,setPost]=useState(null);
let {id}=useParams();
    function getPost(){
        axios.get(`http://localhost:5500/api/post/${id}`).then((res)=>{setPost(res.data.data.post);console.log(res.data)}).catch((err)=>console.log(err));
    }

   
    useEffect(() => {
        getPost();
    }, [])
    
if(post==null){
    return <div><p>Loading</p></div>
}
else{
  return (<div>
    <div style={{width:'1200px',margin:'0px auto'}}><Post showcomments={true} post={post}/></div></div>
  )
}
}

export default CheckPost