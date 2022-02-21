import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Discussion_Row_Item() {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="w-1/2 flex justify-between items-center">
        <img
          src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          className="rounded-full  w-10 h-10 mb-1"
          alt=""
        />
        <span>Saleh</span>
      </div>

      <FontAwesomeIcon
        className="hover text-green-400 h-2 w-2"
        icon={faCircle}
      />
    </div>
  );
}

export default Discussion_Row_Item;
