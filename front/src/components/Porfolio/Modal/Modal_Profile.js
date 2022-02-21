import React, { useState } from 'react';
import axios from 'axios';
import './Modal.css';
import { useAuthUser } from 'react-auth-kit';

const ModalProfile = (props) => {
  const { closeModal } = props;
  const [imageSelected, setImageSelected] = useState("");
  const auth = useAuthUser()
  const [data, setData] = useState({
    name: "",
    picture:"",
    birthday: "",
    subtitle: "",
    email: "",
    facebook: "",
    linkedin: "",
    github: "",
  });
  async function uploadImage(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "imagekata")
    try {
      await axios.post('https://api.cloudinary.com/v1_1/katakuri740/image/upload', formData)
        .then((res) => {
         axios.post(`http://localhost:5500/api/resume/InsertUserInfo/${auth().id}`, {name:data.name,birthday:data.birthday,subtitle:data.subtitle,email:data.email,facebook:data.facebook,github:data.github,linkedin:data.linkedin,picture:res.data.url});
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
          <h1>Profile info</h1>
        </div>
        <div class="form">
          <div class="form-item">
            <input type="file" id="picture" required
              onChange={(e) => {
                setImageSelected(e.target.files[0]);
              }} />
            <label for="picture">   Profile Picture</label>
          </div>
          <div class="form-item">
            <input type="text" id="Name" required
              onChange={(e) =>
                setData({ ...data, name: e.target.value })} />
            <label for="Name">Name</label>
          </div>
          <div class="form-item">
            <input type="date" id="Birthday" required
              onChange={(e) =>
                setData({ ...data, birthday: e.target.value })} />
            <label for="Birthday">Birthday</label>
          </div>
          <div class="form-item">
            <input type="text" id="subtitle" required
              onChange={(e) =>
                setData({ ...data, subtitle: e.target.value })} />
            <label for="subtitle">Subtitle</label>
          </div>
          <div class="form-item">
            <input type="email" id="email" required
              onChange={(e) =>
                setData({ ...data, email: e.target.value })} />
            <label for="email">Email</label>
          </div>
          <div class="form-item">
            <input type="text" id="facebook" required
              onChange={(e) =>
                setData({ ...data, facebook: e.target.value })} />
            <label for="facebook">facebook</label>
          </div>
          <div class="form-item">
            <input type="text" id="linkedin" required
              onChange={(e) =>
                setData({ ...data, linkedin: e.target.value })} />
            <label for="linkedin">Linkedin</label>
          </div>
          <div class="form-item">
            <input type="text" id="github" required
              onChange={(e) =>
                setData({ ...data, github: e.target.value })} />
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