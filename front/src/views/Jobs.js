import React from "react";
import Job_Offer_Item from "../components/Job_Offer_Item";

function Jobs() {
  return (
    <div className="col-start-2 col-end-6  row-start-2 row-end-10 rounded-lg shadow-2xl bg-gray-100 p-3  overflow-y-scroll no-scrollbar">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
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
          <p style={{ fontSize: "18px", fontWeight: "700" }}>Desired Job</p>
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
          <p style={{ fontSize: "18px", fontWeight: "700", marginTop: "40px" }}>
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
          <p style={{ fontSize: "18px", fontWeight: "700", marginTop: "40px" }}>
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
          <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}><div
            className="hovercursor"
            style={{
              color: "white",
              fontSize: "18px",
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
              style={{ fontSize: "22px", fontWeight: "700", marginTop: "35px" }}
            >
              Available Job Offers
            </p>
          </div>

          <p>42069 offer</p>

          <Job_Offer_Item bookmarked={false} />
          <Job_Offer_Item bookmarked={true} />
          <Job_Offer_Item bookmarked={true} />
          <Job_Offer_Item bookmarked={false} />

          <div
            className="hovercursor"
            style={{
              color: "white",
              fontSize: "25px",
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
