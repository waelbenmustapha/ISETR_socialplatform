import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL ;
function Loginuser(){
axios
      .post("http://localhost:5500/api/user/login", formData)
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          if (
            signIn({
              token: res.data.token,
              expiresIn: 10,
              tokenType: "Bearer",
              authState: res.data.authUserState,
            })
          ) {
          } else {
          }
        }
      })
      .catch((err) => {
        setError(true);
      });}
      export default Loginuser();
