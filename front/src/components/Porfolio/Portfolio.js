import React from "react";
import Resume from "./resume/Resume";
import resume from "../../utils/resume"
import './portfolio.css'
import Profile from './Profile/Profile';
import Header from './Header/Header';
import { Preview, print } from 'react-html2pdf';

function Portfolio() {
    return (
        <div className="main__chatbody">

            <Profile {...resume} />
            <Resume {...resume} />
        </div>
    )
}

export default Portfolio
