import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useLocation } from "react-router-dom";

function Nav_Item(props) {
  // selected = window.location.pathname === props.title ? "selected" : "";
  let location = useLocation();

  return (
    <Link to={`${props.path}`}>
      <div
        className={`flex items-center justify-start h-10 w-full font-test rounded-lg px-4 py-3 ${
          props.selected ? "bg-gray-800" : "bg-transparent"
        }`}
        onClick={() =>
          props.title != "Logout"
            ? props.onClick()
            : location.pathname === "/signin"
        }
      >
        <FontAwesomeIcon
          className="hover text-lg font-bold"
          style={{ marginRight: "20px" }}
          color={`${props.selected ? "white" : "black"}`}
          icon={props.leading}
        />
        <span
          className={`hover text-lg  ${
            props.selected ? "text-white" : "text-black"
          } `}
        >
          {props.title}
        </span>
      </div>
    </Link>
  );
}

export default Nav_Item;
