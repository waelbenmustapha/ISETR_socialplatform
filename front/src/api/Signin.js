import axios from "axios";
import React, { useState } from "react";

import { useSignIn } from "react-auth-kit";

const API_URL = process.env.REACT_APP_API_URL;


// const [err, setError] = useState(false);
const signIn = useSignIn();

function Loginuser(formData, setError) {
  axios
    .post("http://localhost:5500/api/user/login", formData)
    .then((res) => {
      if (res.status === 200) {
        if (
          signIn({
            token: res.data.token,
            expiresIn: 1000,
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
    });
}
export default Loginuser();


