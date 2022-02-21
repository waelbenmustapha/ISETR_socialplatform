import axios from "axios";
import React, { useEffect, useState } from "react";
import Job_Offer_Item from "../components/Job_Offer_Item";

function Jobs() {

  const [jobs,setJobs]=useState([]);

function getJobs(){
axios.get("http://localhost:5500/api/job").then((res)=>setJobs(res.data))
}

useEffect(() => {
  getJobs();
}, [])

  return (
    <div style={{padding:'25px',
  }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width:'1200px',
          margin:'0px auto',
          backgroundColor: "white",
          borderRadius: "15px",
        }}
      >
        <div
          style={{
            flex: 2,
            padding: "50px",
            borderRight: "solid 1px black",
          }}
        >
          <p style={{ fontSize: "16px", fontWeight: "700" }}>Desired Job</p>
          <input
            style={{
              border: "1px solid",
              borderRadius: "12px",
              height: "40px",
              width: "80%",
              marginTop: "20px",
              padding: "5px",
              textOverflow: "ellipsis",
            }}
            placeholder="Job title, keywords, company..."
          />
          <p style={{ fontSize: "16px", fontWeight: "700", marginTop: "40px" }}>
            Location
          </p>
          <input
            style={{
              border: "1px solid",
              borderRadius: "12px",
              height: "40px",
              width: "80%",
              marginTop: "15px",
              padding: "5px",
            }}
            placeholder="Tunis,Ben Arous,Sousse ..."
          />
          <p style={{ fontSize: "16px", fontWeight: "700", marginTop: "40px" }}>
            Filter
          </p>
          <select
            style={{
              border: "1px solid",
              padding: "5px",
              borderRadius: "5px",
              backgroundColor: "#AEAEAE",
            }}
            value="Date"
          >
            <option value="Date">Date</option>
            <option value="Salary">Salary</option>
            <option value="relevance">Relevance</option>
          </select>{" "}
        </div>

        <div
          style={{
            flex: 5,
            padding: "50px",
            paddingTop: "14px",
          }}
        >
          <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:'25px'}}><div
            className="hovercursor"
            style={{
              color: "white",
            
              fontSize: "14px",
              width: "220px",
              textAlign: "center",
              borderRadius: "12px",
              padding: "10px",
              backgroundColor: "#FC7900",
            }}
          >
            Add Job offer
          </div><div className="hover" style={{color:'#FC7900',fontWeight:'500',borderBottom:'1px solid'}}>Saved Offers</div></div>   
          <div>
            <p
              style={{ fontSize: "20px", fontWeight: "700", marginTop: "35px" }}
            >
              Available Job Offers
            </p>
          </div>

          <p>{jobs.length} Offers</p>

          {jobs.map((el)=><Job_Offer_Item element={el} bookmarked={false} />)}
        

          <div
            className="hovercursor"
            style={{
              color: "white",
              fontSize: "22px",
              width: "300px",
              textAlign: "center",
              margin: "25px auto",
              borderRadius: "25px",
              padding: "10px",
              backgroundColor: "#FC7900",
            }}
          >
            Next Page
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jobs;
