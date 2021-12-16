import {
  faChevronRight,
  faCircle,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Discussion_Col_Item from "../components/Discussion_Col_Item";
import Discussion_Row_Item from "../components/Discussion_Row_Item";

function Discussion() {
  return (
    <div className="bg-white w-full col-start-4 col-end-5 row-span-full px-3 pt-5">
      {/* search */}
      <div className="flex border-2 rounded-md w-full">
        <button className="flex items-center justify-center bg-white px-3 ">
          <svg
            className="w-6 h-6 text-gray-400"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path>
          </svg>
        </button>
        <input
          type="text"
          className="px-4 w-full py-2 "
          placeholder="Search Friends"
        />
      </div>

      {/* friends */}
      <div className="flex justify-start items-center gap-5 overflow-x-scroll overflow-y-hidden no-scrollbar h-20 mt-5">
        <Discussion_Col_Item />
        <Discussion_Col_Item />
        <Discussion_Col_Item />
        <Discussion_Col_Item />
        <Discussion_Col_Item />
      </div>

      {/* Friends */}
      <div className="flex justify-between items-center  mt-5">
        <b>
          <span className="text-gray-600">Friends</span>
        </b>

        <FontAwesomeIcon className="hover text-gray-600" icon={faEllipsisH} />
      </div>
      {/* list */}
      <div className="h-96  flex flex-col justify-start  items-center gap-5 overflow-x-hidden no-scrollbar overflow-y-scroll mt-6 pb-3  ">
        <Discussion_Row_Item />
        <Discussion_Row_Item />
        <Discussion_Row_Item />
        <Discussion_Row_Item />
        <Discussion_Row_Item />
        <Discussion_Row_Item />
        <Discussion_Row_Item />
        <Discussion_Row_Item />
        <Discussion_Row_Item />
        <Discussion_Row_Item />
        <Discussion_Row_Item />
      </div>
    </div>
  );
}

export default Discussion;
