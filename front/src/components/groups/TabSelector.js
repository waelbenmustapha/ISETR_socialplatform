import axios from "axios";

import React, { useState, useRef, useEffect } from "react";
import { useAuthUser } from "react-auth-kit";
import MyGroups from "./MyGroups";
import useOutsideClick from "../../hooks/useOutsideClick";
import close from "../../images/close.png";
import imageUpload from "../../utils/ImageUpload";
import { Oval } from  'react-loader-spinner'
import FindGroups from "./FindGroups";


function TabSelector() {
const [change,setchange]=useState(false);
  const [grpname,setgrpname]=useState("")
  const [description,setdescription]=useState("")
  const auth = useAuthUser();


function creategroup(){

  axios.post("http://localhost:5500/api/group/",{name:grpname,description:description,image:ImgToAdd,admin_id:auth().id}).then((res)=>setchange(!change))
}

  const [loading,setloading]=useState(false);
  const hiddeninput = useRef(null);
const [ImgToAdd,setImgToAdd]=useState("https://waterfountain.no/wp-content/uploads/2019/11/placeholder.png")
  const [selected, setselected] = useState("first");
  const [show, setShow] = useState(false);
  const [img, setImg] = useState(
    "https://waterfountain.no/wp-content/uploads/2019/11/placeholder.png"
  );
  function hidemodal() {
    setShow(false);
  }

  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef, hidemodal);

  function selectTab(tab) {
    setselected(tab);
  }

  return (
    <div>
      {show && (
        <div
          ref={wrapperRef}
          style={{
            padding: "5px",
            height: "300px",
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
              Create Group
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
              <p style={{ fontSize: "14px" }}>Group image</p>
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
              <p style={{ fontSize: "14px", padding: "5px" }}>Groupe name</p>
              <input
              onChange={(e)=>{setgrpname(e.target.value)}}
                style={{
                  border: "1px solid #999",
                  padding: "3px",
                  borderRadius: "8px",
                }}
                type="text"
                placeholder="Example name"
              />
            </div>
            <div>
              <p style={{ fontSize: "14px", padding: "5px" }}>Description</p>{" "}
              <textarea
                onChange={(e)=>{setdescription(e.target.value)}}
                placeholder="Group description here"
                style={{
                  border: "1px solid #999",
                  padding: "3px",
                  borderRadius: "8px",
                  width: "200px",
                }}
              />{" "}
            </div>
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
      <div className={show ? "disable" : ""}>
        <div
          style={{
            borderBottom: "1px solid #ccc",
            display: "flex",
            flexDirection: "row",
            gap: "25px",
            padding: "15px 15px 0px 35px",
          }}
        >
          <a
            className="hover"
            style={
              selected == "first"
                ? {
                    borderBottom: "2px solid #0A363F",
                    fontWeight: "500",
                    fontSize: "15px",
                    color: "#119D90",
                  }
                : { fontSize: "14px", fontWeight: "400" }
            }
            onClick={() => {
              selectTab("first");
            }}
          >
            My Groups
          </a>
          <a
            className="hover"
            style={
              selected == "second"
                ? {
                    borderBottom: "2px solid #0A363F",
                    fontWeight: "500",
                    fontSize: "15px",
                    color: "#119D90",
                  }
                : { fontSize: "14px", fontWeight: "400" }
            }
            onClick={() => {
              selectTab("second");
            }}
          >
            Find Groups
          </a>
          <a
            onClick={() => setShow(true)}
            className="hover"
            style={{
              marginLeft: "auto",
              border: "1px solid #119D90",
              color: "#0A363F",
              borderRadius: "100px",
              fontSize: "14px",
              fontWeight: "500",
              padding: "5px",
              marginBottom: "3px",
            }}
          >
            Create group
          </a>
        </div>

        {selected == "first" ? (
          <div style={{ padding: "15px 5px 15px 35px" }}>
           
            <MyGroups key={change}/>
          </div>
        ) : selected == "second" ? (
          <div style={{ padding: "15px 5px 15px 35px"}}><FindGroups/></div>
        ) : selected == "third" ? (
          <div style={{ padding: "15px 5px 15px 35px"}}> third selected</div>
        ) : null}
      </div>
    </div>
  );
}

export default TabSelector;
