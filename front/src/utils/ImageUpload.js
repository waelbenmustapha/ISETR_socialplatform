import axios from "axios";

export default function imageUpload(files,setImgToAdd,setloading) {
    const formData = new FormData();
    setloading(true);
    formData.append("file", files[0]);
    formData.append("upload_preset", "StorkCloud");
    axios
      .post("https://api.cloudinary.com/v1_1/dq1i1g9th/image/upload", formData)
      .then((res) => {
        setImgToAdd(res.data.url);
        console.log(res.data.url);
        setloading(false);
      });
  }