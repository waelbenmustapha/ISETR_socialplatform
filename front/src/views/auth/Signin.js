import {
  faChevronDown,
  faCircle,
  faEnvelope,
  faEye,
  faLock,
  faMailBulk,
} from "@fortawesome/free-solid-svg-icons";
// import Loginuser from "../../api/Signin";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { useSignIn } from "react-auth-kit";

function Signin() {
  const signIn = useSignIn();
  const history = useHistory();
  const [err, setError] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  function Loginuser(){
    axios
          .post("http://localhost:5500/api/user/login", formData)
          .then((res) => {
            if (res.status === 200) {
              console.log(res);
              if (
                signIn({
                  token: res.data.token,
                  expiresIn: 20,
                  tokenType: "Bearer",
                  authState: res.data.authUserState,
                })
                
              ) {
                history.push("/feed");
              } else {
              }
            }
          })
          .catch((err) => {
            setError(true);
          });}
  return (
    <div className="w-screen h-screen  overflow-hidden  bg-white">
      {/* Header */}
      <div
        className=" w-full  flex justify-between items-center px-5 shadow-lg"
        style={{ height: "10%" }}
      >
        {/* logo */}
        <div className="flex justify-start items-center  ">
          <img
            className="rounded-full  w-12 h-12"
            src="data:image/jpeg;base64,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"
            alt="avatar"
          />

          <div className="ml-4">
            <h1 className="text-xl font-bold">Alumni</h1>
          </div>
        </div>
        {/* language */}

        <div classnName=" ">
          <button classnName="inline-flex items-center h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
            <span>Language</span>
            <FontAwesomeIcon
              className="hover text-black h-3 w-3"
              icon={faChevronDown}
            />
          </button>
        </div>
      </div>

      {/* form Card */}
      <div
        className=" w-full flex justify-center items-center"
        style={{ height: "90%" }}
      >
        <div className="h-5/6 w-1/3 p-5  shadow-2xl">
          <div>
            <span className="font-bold flex justify-center items-center text-xl uppercase">
              Welcome Back
            </span>
          </div>

          <form className="h-full flex flex-col justify-center">
            {/* Email */}

            <div className="flex flex-col">
              <label class="block mb-1" for="email_form">
                Email
              </label>

              <div className="flex border-2 rounded  ">
                <div className="flex items-center justify-center bg-white px-2 border-r">
                  <FontAwesomeIcon
                    className="hover text-lg font-bold"
                    color="grey"
                    icon={faEnvelope}
                  />
                </div>
                <input
                  type="email"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="px-4 py-2 w-full"
                  placeholder="Email"
                  id="email_form"
                />
              </div>
            </div>

            {/* Password */}
            <label class="block mb-1 mt-5" for="password_form">
              Password
            </label>
            <div className="flex justify-between border-2 rounded   ">
              <div className="flex items-center justify-center bg-white px-2 border-r">
                <FontAwesomeIcon
                  className="hover text-lg font-bold"
                  color="grey"
                  icon={faLock}
                />
              </div>
              <input
                type="password"
                className="px-4 py-2 w-full"
                placeholder="Password"
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                id="password_form"
              />

              <div className="flex items-center justify-center bg-white px-2 border-l">
                <FontAwesomeIcon
                  className="hover text-lg font-bold"
                  color="grey"
                  icon={faEye}
                />
              </div>
            </div>
            {/* forgot password */}
            <div className="flex justify-start  mt-1">
              <span className="text-md text-black-500">Forgot Password?</span>

              <span className="text-md text-blue-500 ml-2">
                <a href="#">Reset Password</a>
              </span>
            </div>

            {/* Submit Button */}
            {err && (
              <p
                style={{
                  fontSize: "16px",
                  margin: "10px",
                  color: "red",
                  textAlign: "center",
                }}
              >
                Email or Password are Incorret
              </p>
            )}
            <div className="flex justify-center mt-5">
              <button
                onClick={(e) => { e.preventDefault(); Loginuser() }
                }
                className="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Sign In
              </button>
            </div>

            {/* signup */}
            <div className="flex justify-center items-center mt-5">
              <span className="text-lg text-black ">
                You don't have an account?
              </span>

              <span className="text-lg text-blue-500 font-bold ml-2">
                <a href="#">Sign Up</a>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signin;
