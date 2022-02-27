import React, { useState } from 'react';
import axios from 'axios';
import './Modal.css';
import { useAuthUser } from 'react-auth-kit';

const ModalProject = (props) => {
    const { closeModal } = props;
    const [imageSelected, setImageSelected] = useState("");
    const auth = useAuthUser()
    const [data, setData] = useState({
        name: "",
        picture: "",
        date: "",
        link: "",
        description: "",
    });
    async function uploadImage(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append("file", imageSelected);
        formData.append("upload_preset", "imagekata")
        try {
            await axios.post('https://api.cloudinary.com/v1_1/katakuri740/image/upload', formData)
                .then((res) => {
                    axios.post(`http://localhost:5500/api/resume/InsertProject/${auth().id}`, { name: data.name, date: data.date, link: data.link, description: data.description, picture:res.data.url });
                    console.log(res.data.url);
                    console.log(data);
                    return alert("Success");
                })
        } catch (error) {
            return alert(error.message);
        }
    };

    const closeicon = () => (
        <img className='cls_button' src="https://img.icons8.com/material/24/000000/close-window--v1.png"
            onClick={closeModal}
        />
    );
    return (
        <div className="overlay">
            <div className="content">
                {closeicon()}
                <div className="titleModal">
                    <h1>Project  </h1>
                </div>
                <div class="form">
                    <div class="form-item">
                        <input type="file" id="picture" required
                            onChange={(e) => {
                                setImageSelected(e.target.files[0]);
                            }} />
                        <label for="picture">   Project Picture</label>
                    </div>
                    <div class="form-item">
                        <input type="text" id="Name" required
                            onChange={(e) =>
                                setData({ ...data, name: e.target.value })} />
                        <label for="Name">Name</label>
                    </div>
                    <div class="form-item">
                        <input type="date" id="date" required
                            onChange={(e) =>
                                setData({ ...data, date: e.target.value })} />
                        <label for="date">date</label>
                    </div>
                    <div class="form-item">
                        <input type="text" id="description" required
                            onChange={(e) =>
                                setData({ ...data, description: e.target.value })} />
                        <label for="description">description</label>
                    </div>
                    <div class="form-item">
                        <input type="text" id="link" required
                            onChange={(e) =>
                                setData({ ...data, link: e.target.value })} />
                        <label for="link">link repository</label>
                    </div>

                    {closeicon()}
                    <button className='button'
                        onClick={(e) => uploadImage(e)} >Submit</button>
                </div>
            </div>
        </div>
    );
}

export default ModalProject;