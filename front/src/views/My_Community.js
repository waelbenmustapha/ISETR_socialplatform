import React, { useState } from "react";
import FollowersGrid from "../components/community/FollowersGrid";
import Suggest_Item from "../components/Suggest_Item";
import Discussion from "../widgets/Discussion";

function My_Community() {
  const [tabIndex, setTabIndex] = useState(0);
  const tabs = []

  const handleTabChange = (e, newValue) => {
    e.preventDefault();
    setTabIndex(newValue);
  };

  return (
    <div style={{margin:'0px auto',width:'1200px',marginTop:'25px'}} className="col-start-2 col-end-6  row-start-2 row-end-10 rounded-lg shadow-2xl bg-gray-100 grid gap-5 grid-cols-3 grid-rows-10 p-3 ">
      <div className=" col-span-3 row-span-1 flex justify-around items-center gap-5">
        <button class={`w-full h-12 px-3  transition-colors duration-150 ${tabIndex === 0 ? 'bg-blue-700  text-blue-100 hover:bg-blue-800' : 'bg-white text-gray-800 hover:bg-blue-600 hover:text-white '}  rounded-lg focus:shadow-outline `}
          onClick={(e) => handleTabChange(e, 0)}
        >
          Followers
        </button>

        <button class={`w-full h-12 px-3  transition-colors duration-150 ${tabIndex === 1 ? 'bg-blue-700  text-blue-100 hover:bg-blue-800' : 'bg-white text-gray-800 hover:bg-blue-600 hover:text-white '}  rounded-lg focus:shadow-outline `}
          onClick={(e) => handleTabChange(e, 1)}
        >
          Followings
        </button>

        <button class={`w-full h-12 px-3  transition-colors duration-150 ${tabIndex === 2 ? 'bg-blue-700  text-blue-100 hover:bg-blue-800' : 'bg-white text-gray-800 hover:bg-blue-600 hover:text-white '}  rounded-lg focus:shadow-outline `}
          onClick={(e) => handleTabChange(e, 2)}>


          People you might know
        </button>
      </div>
      {/* Suggest */}
      <FollowersGrid setTabIndex={setTabIndex} tabIndex={tabIndex} />
      
    </div>
  );
}

export default My_Community;
