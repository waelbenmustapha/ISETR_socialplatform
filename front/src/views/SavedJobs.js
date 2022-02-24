import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useAuthUser } from 'react-auth-kit'
import Job_Offer_Item from '../components/Job_Offer_Item';

function SavedJobs() {
    const [jobs,setJobs]=useState([]);

const auth = useAuthUser();
function getSavedJobs(){
    axios.get(`http://localhost:5500/api/job/favorie/${auth().id}`).then((res)=>setJobs(res.data))
}

useEffect(() => {
    getSavedJobs();
}, [])


  return (
      <div style={{padding:'25px'}}>
    <div  style={{
        display: "flex",
        width: "1200px",
        margin: "0px auto",
        backgroundColor: "white",
        borderRadius: "15px",
      }}>
          <div style={{margin:'0px auto',padding:'25px'}}>
          {jobs.map((el) => (
            <Job_Offer_Item element={el}  />
          ))} 
          </div>
        </div>
        </div>
  )
}

export default SavedJobs