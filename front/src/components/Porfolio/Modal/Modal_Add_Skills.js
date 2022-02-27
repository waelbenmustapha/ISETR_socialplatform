import React, { useState } from 'react';
import axios from 'axios';
import './Modal.css';
import { useAuthUser } from 'react-auth-kit';

const AddSkills = (props) => {

  const { closeModal } = props;
  const [formData, setFormData] = useState({
    name: "",
    level:""
   
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
      await axios.post(`http://localhost:5500/api/resume/InsertSkills/${auth().id}`, formData);

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
          <h1>Add Skills</h1>
        </div>
        <div class="form">
          <div class="form-item">
            <input type="text" id="name" autocomplete="off" required
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })} />
            <label for="name">name</label>
          </div>
          <div class="form-item">
            <input type="number" min="10" max="100" id="Level" autocomplete="off" required
              onChange={(e) =>
                setFormData({ ...formData, level: e.target.value })} />
            <label for="Level">Level %</label>
          </div>
          {closeicon()}
          <button className='button' onClick={(e) => handleSubmit(e)} >Submit</button>
        </div>
      </div>
    </div>
  );
}

export default AddSkills;