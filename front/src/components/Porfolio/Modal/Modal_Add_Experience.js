import React, { useState } from 'react';
import axios from 'axios';
import './Modal.css';
const AddExperience = (props) => {
  const { closeModal } = props;
  const [formData, setFormData] = useState({
    title: "",
    DateStart: "",
    DateEnd: "",
    description: "",
  });
  const closeicon = () => (
    <img className='cls_button' src="https://img.icons8.com/material/24/000000/close-window--v1.png"
      onClick={closeModal}
    />
  );


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      await axios.post("http://localhost:5500/api/resume/InsertExperience", formData);
      return alert("Success");
    } catch (error) {
      return alert(error.message);
    }
  };

  return (
    <div className="overlay">
      <div className="content">
        {closeicon()}
        <div className="titleModal">
          <h1>Add Experience</h1>
        </div>
        <div class="form">
          <div class="form-item">
            <input type="text" id="username" autocomplete="off" required
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })} />
            <label for="username">Title</label>
          </div>
          <div class="form-item">
            <input type="date" id="date" autocomplete="off" required
              onChange={(e) =>
                setFormData({ ...formData, DateStart: e.target.value })} />
            <label for="date">Date Start</label>
          </div>
          <div class="form-item">
            <input type="date" id="date" autocomplete="off" required
              onChange={(e) =>
                setFormData({ ...formData, DateEnd: e.target.value })} />
            <label for="date">Date End</label>
          </div>
          <div class="form-item">
            <input type="textarea" id="username" autocomplete="off" required
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })} />
            <label for="username">Description</label>
          </div>
          {closeicon()}
          <button className='button' onClick={(e) => handleSubmit(e)} >Submit</button>
        </div>
      </div>
    </div>
  );
}

export default AddExperience;