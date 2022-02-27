import React,{useEffect} from "react";
import Resume from "./resume/Resume";
import resume from "../../utils/resume"
import './portfolio.css'
import {useLocation} from 'react-router-dom';
import Profile from './Profile/Profile';
import UserProfile from "../UserProfile";
function Portfolio(props) {
  /*   const location = useLocation();

    useEffect(() => {
       console.log(location.pathname); // result: '/secondpage'
       console.log(location.search); // result: '?query=abc'
       console.log(location.state.detail); // result: 'some_value'
    }, [location]); */
   
    return (
        <div className="main__chatbody">

            <Profile  />
            <Resume {...resume} /> 
        </div>
    )
}

export default Portfolio
