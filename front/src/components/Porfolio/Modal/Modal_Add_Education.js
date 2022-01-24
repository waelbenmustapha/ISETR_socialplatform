import React, { useState } from 'react';
import axios from 'axios';
import './Modal.css';
function AddEducation({ setOpenModalAED }) {
  const [formData, setFormData] = useState({
    title: "",
    DateStart: "",
    DateEnd:"",
    description:"",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      await axios.post("http://localhost:5500/api/resume/InsertEducation", formData);
      return alert("Success");
    } catch (error) {
      return alert(error.message);
    }
  };

  return (

    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
        </div>
        <div className="titleModal">
          <h1>Add Education</h1>
        </div>
        <div className="bodyModal">
          <input type="text" class="form__input" id="title" placeholder="Title" required=""
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })} />
          <label for="title" class="form__label"></label>
          <input type="date" class="form__input" id="date" required=""
            onChange={(e) =>
              setFormData({ ...formData, DateStart: e.target.value })} />
          <label for="date" class="form__label"></label>
          <input type="date" class="form__input" id="EndDate" required=""
            onChange={(e) =>
              setFormData({ ...formData, DateEnd: e.target.value })} />
          <label for="EndDate" class="form__label"></label>
          <input type="text" class="form__input" id="description" placeholder="Description" required=""
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })} />
          <label for="description" class="form__label"></label>
        </div>
        <div className="footerModal">
          <button
            onClick={() => {
              setOpenModalAED(false);
            }} id="cancelBtn">Cancel </button>
          <button onClick={(e) => handleSubmit(e)} >Submit</button>
        </div>
      </div>
    </div>
  );
}

export default AddEducation;
