import React, { useState } from "react";

function Notifications_Settings() {
  const [checked, setChecked] = useState(true);

  return (
    <div className="w-full p-4">
      <p>What notifications you will get:</p>

      <div className="pt-7 flex flex-col justify-start items-stretch gap-4">
        <div className="flex justify-between items-center ">
          <span>Friend activity</span>
          <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
            <input
              type="checkbox"
              name="toggle"
              id="toggle"
              className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
            />
            <label
              for="toggle"
              className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
            ></label>
          </div>
        </div>

        <div className="flex justify-between items-center ">
          <span>Public post activity</span>
          <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
            <input
              type="checkbox"
              name="toggle_Public"
              id="Public"
              className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
            />
            <label
              for="Public"
              className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
            ></label>
          </div>
        </div>

        <div className="flex justify-between items-center ">
          <span>Group post activity</span>
          <div
            onClick={() => setChecked(!checked)}
            className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in"
          >
            <input
              type="checkbox"
              name="toggle_Group"
              id="Group"
              className={`absolute block w-6 h-6 rounded-full
              
              bg-white   
             ${
               checked ? "border-blue-600 right-0" : ""
             } border-4 appearance-none cursor-pointer`}
            />
            <label
              for="Group"
              className={`toggle-labelc block overflow-hidden h-6 rounded-full            ${
                checked ? "bg-blue-600" : "bg-gray-300"
              }   
              cursor-pointer`}
            ></label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notifications_Settings;
