import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import GroupItem from '../../widgets/GroupItem';
import magnifier from "../../images/magnifier.png";
function FindGroups(props) {

const [mygroups,setGroups]=useState([]);
const [searchname,setSearchname]=useState("");
function searchgroup(){
axios.get(`http://localhost:5500/api/group/search?name=${searchname}`).then((res)=>setGroups(res.data.data));
}

useEffect(() => {
searchgroup();
}, [searchname]);

  return <div>
 <div style={{display:'flex',flexDirection:'row',alignItems:'center',  width: "300px",
            height: "35px",
            borderRadius: "8px",
            backgroundColor: "#eef3f8",}}> 
       <input
          placeholder="Search"
          onChange={(e)=>setSearchname(e.target.value)}
          style={{
          width:'90%',
          backgroundColor:'#eef3f8',
          borderRadius:'8px',
          paddingLeft:'15px',
          height:'100%'
          }}
        />
        <img className="hovercolor" src={magnifier} style={{height:'20px',width:'20px',marginLeft:'5px'}}/>
        </div>
        
        
        <div style={{display:'flex',flexDirection:'column',justifyContent:'space-around',gap:'10px',padding:'10px'}}>

{mygroups.map((el)=>{return <GroupItem setselected={props.setselected} mygroups={false} items={el}/>})}


  </div>













  </div>;
}

export default FindGroups;
