import React from "react";
import Suggest_Item from "../components/Suggest_Item";
import Discussion from "../widgets/Discussion";

function My_Community() {
  return (
    <div className="col-start-2 col-end-6  row-start-2 row-end-10 rounded-lg shadow-2xl bg-gray-100 grid gap-5 grid-cols-4 grid-rows-10 p-3 ">
      <div className=" col-span-3 row-span-1 flex justify-around items-center gap-5">
        <button class="w-full h-12 px-6 text-gray-800 font-bold border-2 transition-colors duration-150 bg-white rounded-lg focus:shadow-outline hover:bg-blue-600 hover:text-white">
          52,444 Followers
        </button>

        <button class="w-full h-12 px-6 text-gray-800 font-bold border-2 transition-colors duration-150 bg-white rounded-lg focus:shadow-outline hover:bg-blue-600 hover:text-white">
          2,564 Followings
        </button>

        <button class="w-full h-12 px-3 text-blue-100 transition-colors duration-150 bg-blue-700 rounded-lg focus:shadow-outline hover:bg-blue-800 ">
          People you might know
        </button>
      </div>
      {/* Suggest */}
      <div className=" flex flex-wrap justify-between items-center gap-5 overflow-y-scroll col-span-3 row-start-2 row-end-11">
        {/* items */}
        <Suggest_Item />
        <Suggest_Item />
        <Suggest_Item />
        <Suggest_Item />
        <Suggest_Item />
        <Suggest_Item />
        <Suggest_Item />
        <Suggest_Item />
        <Suggest_Item />
        <Suggest_Item />
        <Suggest_Item />
        <Suggest_Item />
      </div>

      {/* Discussion */}
      <Discussion />
    </div>
  );
}

export default My_Community;
