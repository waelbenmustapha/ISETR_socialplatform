import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Setting_Item(props) {
  return (
    <div
      className="flex justify-start items-center   mb-2 w-full py-2 px-1 shadow-md"
      onClick={props.onClick}
    >
      <FontAwesomeIcon
        className="hover"
        style={{ marginRight: "1rem" }}
        color={`${props.selected ? "black" : "grey"}`}
        icon={props.leading}
      />
      <span
        className={`hover text-sm ${
          props.selected ? "text-black font-bold" : "text-gray-500"
        } `}
      >
        {props.title}
      </span>

      {props.more && (
        <FontAwesomeIcon
          className="hover"
          style={{ marginLeft: "2rem" }}
          color={`${props.selected ? "black" : "grey"}`}
          icon={faChevronRight}
        />
      )}
    </div>
  );
}

export default Setting_Item;
