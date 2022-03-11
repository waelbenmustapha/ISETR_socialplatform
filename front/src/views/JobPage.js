import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";





function JobPage() {

    const location = useLocation();
const [job,setJob]=useState(location.state.job);
    useEffect(() => {
        console.log(location.state)
    }, [])
  return (
    <div><div style={{margin:'0px auto',width:'600px',backgroundColor:'white',marginTop:'25px',borderRadius:'8px',display:'flex',flexDirection:'row',justifyContent:'center',alignContent:'center',alignItems:'center'}}>
        <div style={{flex:1}}><p className='joboffertitle' style={{fontSize:'30px',padding:'10px'}}>{job.title}</p>
    <p style={{padding:'10px',fontSize:'15px',opacity:'0.8'}}>Company : {job.company}</p>
    <p style={{padding:'10px',fontSize:'15px',opacity:'0.8'}}>Location : {job.location}</p>
    <p style={{padding:'10px',fontSize:'15px',opacity:'0.8'}}>{location.state.ago} ago</p>
</div>
<img src={job.image} style={{maxWidth:'250px'}}/>    
    
    </div><div style={{margin:'0px auto',width:'600px',backgroundColor:'white',marginTop:'25px',borderRadius:'8px'}}>
        <p style={{fontSize:'25px',fontWeight:'500',padding:'10px'}}>Description</p>
        <p style={{padding:'25px',lineHeight:'200%',textAlign:'justify'}}>{job.description}</p>
        
        
        </div></div>
  )
}

export default JobPage