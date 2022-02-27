import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useAuthUser } from 'react-auth-kit';
import "./card.css";
function Card() {
    const [projects, setProjects] = useState([]);
    const auth = useAuthUser();


    //Get Education Data
    async function getP() {
        try {
            const res = await axios.get(`http://localhost:5500/api/resume/getProject/${auth().id}`)
                .then(res => {
                    setProjects(res.data)
                })
        } catch (error) {
            return alert(error.message);
        };
    }
    useEffect(() => {
        getP()
    }, [projects])
    return (
        <div>

            <div className='container1'>
            {projects.map((project) => (
                        <div>
                <div class="card">

                    
                            <div class="card-img-holder">
                                <img src={project.picture} />
                            </div>
                            <h3 class="blog-title">{project.name}</h3>
                            <span class="blog-time"> {JSON.stringify(project.date).substring(1, 11)}</span>
                            <p class="description">
                                {project.description}                </p>
                            <div class="options">
                               
                                                    
                                <button class="btn"><a href={project.link} >Check</a></button>
                            </div>
                        </div>

                </div>
                    ))}

            </div>


        </div>
    )
}

export default Card