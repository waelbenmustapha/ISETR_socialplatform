import React, { useRef } from "react";
import { useAuthUser } from "react-auth-kit";
import { useState } from "react/cjs/react.development";
import axios from "axios";
import { useSignIn } from "react-auth-kit";
import exchange from "./../images/exchange.png";
import { Oval } from "react-loader-spinner";

import imageUpload from "../utils/ImageUpload";
function Edit_Profile() {
  const auth = useAuthUser();

  const signIn = useSignIn();
  const hiddeninput = useRef(null);
  const [imgToAdd, setImgToAdd] = useState(auth().avatar);
  const [loading, setloading] = useState(false);

  function UpdateUser() {
   
    axios
      .patch(`http://localhost:5500/api/user/${auth().id}`, {...usr,avatar:imgToAdd})
      .then((res) => {
        axios.get(`http://localhost:5500/api/user/${auth().id}`).then((res) =>
          signIn({
            token: res.data.token,
            expiresIn: 20,
            tokenType: "Bearer",
            authState: res.data,
          })
        );
      });
  }

  const [usr, setUsr] = useState({
    name: auth().name,
    email: auth().email,
    birthday: auth().birthday,
    avatar:imgToAdd,
    bio: auth().bio,
    phone: auth().phone,
    website: auth().website,
    gender: auth().gender,
    address: auth().address,
  });
  return (
    <div className="w-full h-full overflow-scroll overflow-x-hidden  px-4 pb-7">
      <span className="mt-5 block font-bold ">Edit Profile</span>

      {/* profile pic to edit */}

      {loading == false ? (
        <div
          onClick={() => hiddeninput.current.click()}
          className="hover"
          style={{ position: "relative", width: "90px" }}
        >
          <img
            className="hovercolorblue"
            src={exchange}
            style={{
              height: "25px",
              width: "25px",
              position: "absolute",
              right: "0px",
              bottom: "0px",
            }}
          />
          <img
            style={{ height: "80px", width: "80px", borderRadius: "50%" }}
            src={imgToAdd}
            alt="Profile image"
          />
        </div>
      ) : (
        <Oval heigth="40" width="40" color="grey" ariaLabel="loading" />
      )}

      {/* form */}

      <form className="grid grid-cols-2 gap-12 items-center">
        <div class="text-black col-span-1">
          <label class="block mb-1" for="forms-labelOverInputCode">
            Full name
          </label>
          <input
            class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
            type="text"
            onChange={(e) => setUsr({ ...usr, name: e.target.value })}
            value={usr.name}
            id="forms-labelOverInputCode"
          />
        </div>

        <div class="text-black col-span-1">
          <label class="block mb-1" for="forms-labelOverInputCode">
            Birthday
          </label>
          <input
            ref={hiddeninput}
            style={{ display: "none" }}
            type="file"
            onChange={(e) => {
              imageUpload(e.target.files, setImgToAdd, setloading);
              
            }}
          />
          <input
            class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
            type="date"
            onChange={(e) => setUsr({ ...usr, birthday: e.target.value })}
            value={usr.birthday}
            id="forms-labelOverInputCode"
          />
        </div>

        <div class="text-black col-span-1">
          <label class="block mb-1" for="forms-labelOverInputCode">
            Email
          </label>
          <input
            class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
            type="email"
            onChange={(e) => setUsr({ ...usr, email: e.target.value })}
            value={usr.email}
            id="forms-labelOverInputCode"
          />
        </div>

        <div class="text-black col-span-1">
          <label class="block mb-1" for="forms-labelOverInputCode">
            Bio
          </label>
          <input
            class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
            type="text"
            onChange={(e) => setUsr({ ...usr, bio: e.target.value })}
            value={usr.bio}
            id="forms-labelOverInputCode"
          />
        </div>

        <div class="text-black col-span-1">
          <label class="block mb-1" for="forms-labelOverInputCode">
            Phone Number
          </label>
          <input
            class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
            type="number"
            onChange={(e) => setUsr({ ...usr, phone: e.target.value })}
            value={usr.phone}
            id="forms-labelOverInputCode"
          />
        </div>

        <div class="text-black col-span-1">
          <label class="block mb-1" for="forms-labelOverInputCode">
            Website
          </label>
          <input
            class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
            type="text"
            onChange={(e) => setUsr({ ...usr, website: e.target.value })}
            value={usr.website}
            id="forms-labelOverInputCode"
          />
        </div>

        <div class="text-black col-span-1">
          <label class="block mb-1" for="forms-labelOverInputCode">
            Gender
          </label>
          <div class="w-full flex justify-start items-center h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline">
            <label class="text-gray-700 w-1/2">
              <input
                defaultChecked={auth().gender == "male" ? true : false}
                onChange={(e) => setUsr({ ...usr, gender: e.target.value })}
                type="radio"
                value="male"
                name="gender"
              />
              <span class="ml-1">Male</span>
            </label>

            <label class="text-gray-700">
              <input
                defaultChecked={auth().gender == "female" ? true : false}
                onChange={(e) => setUsr({ ...usr, gender: e.target.value })}
                type="radio"
                value="female"
                name="gender"
              />
              <span class="ml-1">Female</span>
            </label>
          </div>
        </div>

        <div class="text-black col-span-1">
          <label class="block mb-1" for="forms-labelOverInputCode">
            Location
          </label>
          <input
            class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
            type="text"
            onChange={(e) => setUsr({ ...usr, address: e.target.value })}
            value={usr.address}
            id="forms-labelOverInputCode"
          />
        </div>
      </form>

      <p
        onClick={() => UpdateUser()}
        className="hover"
        style={{
          fontSize: "14px",
          fontWeight: "500",
          color: "white",
          backgroundColor: "orange",
          width: "150px",
          textAlign: "center",
          borderRadius: "8px",
          padding: "10px",
          margin: "15px",
        }}
      >
        Edit
      </p>
    </div>
  );
}

export default Edit_Profile;
