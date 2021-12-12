import React from "react";

function Suggest_Item() {
  return (
    <div class=" w-60 h-40 bg-white  p-3 grid  grid-cols-3 grid-rows-3 gap-3 max-w-xs overflow-hidden rounded-lg shadow-lg">
      <div className=" col-span-1 row-span-2">
        <img
          class="inline object-cover w-14 h-14 rounded-full"
          src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Profile image"
        />
      </div>
      <div className=" col-span-2 row-span-2">
        <div className="text-sm text-gray-600">
          <p>
            <b>
              <a href="#" className="text-gray-600">
                @Randovan Skiaal
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
      <div className=" flex justify-around items-center gap-3 col-span-3 row-span-2">
        <button class="w-full h-11 px-6 text-gray-500 border-2 transition-colors duration-150  rounded-lg focus:shadow-outline hover:bg-blue-600 hover:text-white">
          Ignore
        </button>
        <button class="w-full h-11 px-6 text-blue-100 transition-colors duration-150 bg-blue-700 rounded-lg focus:shadow-outline hover:bg-blue-800">
          Follow
        </button>
      </div>
    </div>
  );
}

export default Suggest_Item;
