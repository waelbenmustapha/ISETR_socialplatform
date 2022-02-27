import React, { useState } from 'react';
import axios from 'axios';
import './Modal.css';
import { useAuthUser } from 'react-auth-kit';

const AddLanguage = (props) => {

    const { closeModal } = props;
    const [formData, setFormData] = useState({
        name: "",
        level: ""

    });
    const auth = useAuthUser()

    const closeicon = () => (
        <img className='cls_button' src="https://img.icons8.com/material/24/000000/close-window--v1.png"
            onClick={closeModal}
        />
    );


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);

        try {
            await axios.post(`http://localhost:5500/api/resume/InsertLanguage/${auth().id}`, formData);

            return alert("Language Added");
        } catch (error) {
            return alert(error.message);
        }
    };

    return (
        <div className="overlay">
            <div className="content">
                {closeicon()}
                <div className="titleModal">
                    <h1>Add language</h1>
                </div>
                <div class="form">
                    <div class="form-item">
                        <input type="text" id="name" autocomplete="off" required
                            onChange={(e) =>
                                setFormData({ ...formData, name: e.target.value })} />
                        <label for="name">name</label>
                    </div>
                    <div class="form-item">
                        <select onChange={(e) =>
                            setFormData({ ...formData, level: e.target.value })}>
                            <option value="BEGINNER">BEGINNER</option>
                            <option value="ELEMENTARY">ELEMENTARY</option>
                            <option value="INTERMEDIATE">INTERMEDIATE</option>
                            <option value="UPPER INTERMEDIAT">UPPER INTERMEDIATE</option>
                            <option value="ADVANCED">ADVANCED</option>
                            <option value="MASTERY">MASTERY</option>
                            
                        </select>
                    </div>
                    {closeicon()}
                    <button className='button' onClick={(e) => handleSubmit(e)} >Submit</button>
                </div>
            </div>
        </div>
    );
}

export default AddLanguage;