import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthUser } from "react-auth-kit";

function Suggest_Item({ user, tabIndex,setTabIndex }) {
  const auth = useAuthUser();

  function unfollow(){
   
    axios.delete("http://localhost:5500/api/follow/delete", {
      headers: {
      },
      data: {
        user_id:auth().id,follower_id:user.id
      }
    }).then((res)=>setTabIndex(2))
}

  const followUser = async (e, user_id) => {
    e.preventDefault();
    await axios.post(`http://localhost:5500/api/follow/send-request`, {
      user_id: auth().id,
      follower_id: user_id
    })
      .then((res) => {setTabIndex(1)
      }).catch((err) => {
        alert(err);
      });

  }


  return (
    <div class=" w-60 h-40 bg-white  p-3 grid  grid-cols-3 grid-rows-3 gap-3 max-w-xs overflow-hidden rounded-lg shadow-lg">
      <div className=" col-span-1 row-span-2">
        <img
          class="inline object-cover w-14 h-14 rounded-full"
          src={user.avatar.length > 0 ? user.avatar : "https://i.imgur.com/7yUvePI.png"}
          alt="Profile image"
        />
      </div>
      <div className=" col-span-2 row-span-2">
        <div className="text-sm text-gray-600">
          <p>
            <b>
              <a href="#" className="text-gray-600">
                @{user.name}
              </a>
            </b>
          </p>
          <p>
            <a href="#" className="text-gray-400">
              Web Developer
            </a>
          </p>
        </div>
      </div>

      {

        tabIndex === 0 ? (<></>) :
          tabIndex === 1 ?
            <div className=" flex justify-around items-center gap-3 col-span-3 row-span-2">

              <button onClick={()=>unfollow()} class="w-full h-11 px-6 text-blue-100 transition-colors duration-150 bg-blue-700 rounded-lg focus:shadow-outline hover:bg-blue-800">
                unfollow
              </button>


            </div>
            : <div className=" flex justify-around items-center gap-3 col-span-3 row-span-2">


              <button class="w-full h-11 px-6 text-gray-500 border-2 transition-colors duration-150  rounded-lg focus:shadow-outline hover:bg-blue-600 hover:text-white">
                Ignore
              </button>
              <button class="w-full h-11 px-6 text-blue-100 transition-colors duration-150 bg-blue-700 rounded-lg focus:shadow-outline hover:bg-blue-800"
                onClick={(e) => followUser(e, user.id)}
              >
                Follow
              </button>

            </div>

      }

    </div>
  );
}

export default Suggest_Item;
