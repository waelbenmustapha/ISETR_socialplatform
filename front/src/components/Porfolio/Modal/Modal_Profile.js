import React, { useState } from 'react';
import axios from 'axios';
import './Modal.css';
const ModalProfile = (props) => {
  const { closeModal } = props;
  const [imageSelected, setImageSelected]=useState("");
  const uploadImage = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "imagekata")
 axios.post('https://api.cloudinary.com/v1_1/katakuri740/image/upload', formData)
      .then((res) => {
        console.log(res);
       
      })


  };
  const [formData, setFormData] = useState({
    picture: "",
    name: "",
    birthday: "",
    subtitle: "",
    email: "",
    facebook: "",
    linkedin: "",
    github: "",
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
      await axios.post("http://localhost:5500/api/resume/InsertUserInfo", formData);
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
          <h1>Profile info</h1>
        </div>
        <div class="form">
          <div class="form-item">
            <input type="file" id="picture" autocomplete="off" required
              onChange={(e) => {
                setImageSelected(e.target.files[0]);
              }} />
            <label for="picture">   Profile Picture</label>
          </div>
          <div class="form-item">
          <input type="text" id="Name" autocomplete="off" required
onChange={(e) =>
  setFormData({ ...formData, name: e.target.value })} />
<label for="Name">Name</label>
</div>
<div class="form-item">
<input type="date" id="Birthday" autocomplete="off" required
onChange={(e) =>
  setFormData({ ...formData, birthday: e.target.value })} />
<label for="Birthday">Birthday</label>
</div>
<div class="form-item">
<input type="text" id="subtitle" autocomplete="off" required
onChange={(e) =>
  setFormData({ ...formData, subtitle: e.target.value })} />
<label for="subtitle">Subtitle</label>
</div>
<div class="form-item">
<input type="email" id="email" autocomplete="off" required
onChange={(e) =>
  setFormData({ ...formData, email: e.target.value })} />
<label for="email">Email</label>
</div>
<div class="form-item">
<input type="text" id="facebook" autocomplete="off" required
onChange={(e) =>
  setFormData({ ...formData, facebook: e.target.value })} />
<label for="facebook">facebook</label>
</div>
<div class="form-item">
<input type="text" id="linkedin" autocomplete="off" required
onChange={(e) =>
  setFormData({ ...formData, linkedin: e.target.value })} />
<label for="linkedin">Linkedin</label>
</div>
<div class="form-item">
<input type="text" id="github" autocomplete="off" required
onChange={(e) =>
  setFormData({ ...formData, github: e.target.value })} />
<label for="github">GitHub</label>
</div>
 
          {closeicon()}
          <button className='button'
            onClick={(e) => uploadImage(e)} >Submit</button>
        </div>
      </div>
    </div>
  );
}

export default ModalProfile;