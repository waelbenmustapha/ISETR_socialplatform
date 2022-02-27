import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Job_Offer_Item from "../components/Job_Offer_Item";
import close from "../images/close.png";
import { Oval } from  'react-loader-spinner'
import imageUpload from '../utils/ImageUpload';
import { useHistory } from "react-router-dom";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [Initialjobs,setInitialjobs]=useState([])
  let history = useHistory();

  const [newJob,setNewjob]=useState({title:"",location:"",company:"",description:"",image:"",type:"Full"})
  const [show, setShow] = useState(false);
  const wrapperRef = useRef(null);
  const [loading,setloading]=useState(false);
  const hiddeninput = useRef(null);
const [ImgToAdd,setImgToAdd]=useState("https://waterfountain.no/wp-content/uploads/2019/11/placeholder.png")
  function getJobs() {
    axios.get("http://localhost:5500/api/job").then((res) => {setJobs(res.data);setInitialjobs(res.data)});
  }
  function creategroup(){
   
axios.post("http://localhost:5500/api/job/add",{ ...newJob, image:ImgToAdd }).then((res)=>getJobs())
   console.log("create")
  }
  const handleSearch  = (searchInput) => {
    const filteredData = Initialjobs.filter(value => {
      const searchStr = searchInput.toLowerCase();
      const titlematch = value.title.toLowerCase().includes(searchStr);
      const descriptionmatch = value.description.toString().toLowerCase().includes(searchStr);
      const companymatch = value.company.toString().toLowerCase().includes(searchStr);

      return titlematch || descriptionmatch || companymatch;
    });
    setJobs(filteredData);
  }
 
  const handleSearchTime  = (searchInput) => {
    const filteredData = Initialjobs.filter(value => {
      const searchStr = searchInput;
      
      const timematch = value.type.includes(searchStr);
      return timematch;
    });
    console.log(filteredData)

    setJobs(filteredData);
  }
  useEffect(() => {
    getJobs();
  }, []);

  return (
    <div style={{ padding: "25px" }}>
      {show && (
        <div
          ref={wrapperRef}
          style={{
            padding: "5px",
            height: "350px",
            width: "450px",
            zIndex: "5",
            backgroundColor: "white",
            border: "1px solid #bbb",
            borderRadius: "8px",
            position: "absolute",
            margin: "auto",
            top: "0px",
            left: "0px",
            right: "0px",
            bottom: "0px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{}}>
            <a
              style={{
                paddingLeft: "5px",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              Add Job
            </a>
            <img
              onClick={() => {
                setShow(false);
              }}
              src={close}
              className="hovercolorblue"
              style={{
                float: "right",
                padding: "5px",
                height: "25px",
                width: "25px",
              }}
            ></img>
          </div>
          <div
            style={{
              overflowY: "scroll",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              borderTop: "1px solid #bbb",
              padding: "5px",
            }}
          >
            <div>
              <p style={{ fontSize: "14px" }}>Job Preview image</p>
              {loading ==false ? <span
className="hover"            onClick={() => {
              hiddeninput.current.click();
            }}
          >
           <img src={ImgToAdd} style={{height:'55px',width:'65px',display:'inline'}}/>
            <input
              ref={hiddeninput}
              style={{ display: "none" }}
              type="file"
              onChange={(e) =>{ imageUpload(e.target.files,setImgToAdd,setloading)}}
            />
          </span>:<Oval
    heigth="40"
    width="40"
  
    color='grey'
    ariaLabel='loading'
  />}
         
            </div>
            <div>
              <p style={{ fontSize: "14px", padding: "5px" }}>Job title</p>
              <input
              onChange={(e)=>{  setNewjob({ ...newJob, title: e.target.value })}}
                style={{
                  border: "1px solid #999",
                  padding: "3px",
                  borderRadius: "8px",
                }}
                type="text"
                placeholder="Example Dev Python"
              />
            </div>
            <div>
              <p style={{ fontSize: "14px", padding: "5px" }}>Company Name</p>
              <input
              onChange={(e)=>{  setNewjob({ ...newJob, company: e.target.value })}}
                style={{
                  border: "1px solid #999",
                  padding: "3px",
                  borderRadius: "8px",
                }}
                type="text"
                placeholder="Company name"
              />
            </div>
            <div>
              <p style={{ fontSize: "14px", padding: "5px" }}>Work Location</p>
              <input
              onChange={(e)=>{  setNewjob({ ...newJob, location: e.target.value })}}
                style={{
                  border: "1px solid #999",
                  padding: "3px",
                  borderRadius: "8px",
                }}
                type="text"
                placeholder="Example Tunis,Sfax,Sousse"
              />
            </div>
            <div>
              <p style={{ fontSize: "14px", padding: "5px" }}>Description</p>{" "}
              <textarea
              onChange={(e)=>{  setNewjob({ ...newJob, description: e.target.value })}}
              placeholder="Group description here"
                style={{
                  border: "1px solid #999",
                  padding: "3px",
                  borderRadius: "8px",
                  width: "200px",
                }}
              />{" "}
            </div>
            
            <select
            value={newJob.type}
            style={{
              border: "1px solid",
              padding: "5px",
              borderRadius: "5px",
              backgroundColor: "#AEAEAE",
            }}
            onChange={(e)=>{  setNewjob({ ...newJob, type: e.target.value })}}
          
          >
            <option value="Full">Full time</option>
            <option value="Part">Part Time</option>
          </select>
          </div>
          <div
          onClick={()=>{creategroup();setShow(false);}}
            style={{ borderTop: "1px solid #bbb", padding: "5px 5px 0px 0px" }}
          >
            <a
              style={{
                borderRadius: "50px",
                fontSize: "14px",
                border: "1px solid #119D90",
                fontWeight: "500",
                padding: "3px 6px 3px 6px",
                background: "#eee",
                float: "right",
              }}
              className="hovercolorbluenofilterr"
            >
              Create
            </a>
          </div>
        </div>
      )}
      <div
      className={show ? "disable" : ""}
        style={{
          display: "flex",
          flexDirection: "row",
          width: "1200px",
          margin: "0px auto",
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
          onChange={(e)=>{handleSearch(e.target.value)}}
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
          onChange={(e)=>handleSearchLocation(e.target.value)}
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
            Time regime
          </p>
          <select
          onChange={(e)=>handleSearchTime(e.target.value)}
            style={{
              border: "1px solid",
              padding: "5px",
              borderRadius: "5px",
              backgroundColor: "#AEAEAE",
            }}
defaultValue=""          >
            <option value="Full">Full time</option>
            <option value="Part">Part time</option>
            <option value="">Both</option>
          </select>{" "}
        </div>

        <div
          style={{
            flex: 5,
            padding: "50px",
            paddingTop: "14px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "25px",
            }}
          >
            <div
              className="hovercursor"
              onClick={() => setShow(true)}
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
            </div>
            
            <div
              className="hover"
              onClick={()=>history.push("/savedJobs")}
              style={{
                color: "#FC7900",
                fontWeight: "500",
                borderBottom: "1px solid",
              }}
            >
              Saved Offers
            </div>
          </div>
          <div>
            <p
              style={{ fontSize: "20px", fontWeight: "700", marginTop: "35px" }}
            >
              Available Job Offers
            </p>
          </div>

          <p>{jobs.length} Offers</p>

          {jobs.map((el) => (
            <Job_Offer_Item element={el}  />
          ))}

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
