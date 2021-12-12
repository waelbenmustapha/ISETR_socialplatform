import React from "react";
import Nav from "../widgets/Nav";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { nav_routes } from "../utils/routes";
function Main() {
  const page = useParams();

  const getRoutes = () => {
    return nav_routes.map((route) => {
      return <Route path={route.path} element={route.component} />;
    });
  };

  return (
    <div className=" h-screen overflow-hidden grid gap-3 font-test grid-cols-5 grid-rows-9 px-3 pt-3       ">
      {/* header */}
      <div className="bg-white flex justify-between items-center py-2 px-3 col-start-2 col-end-6 row-span-1  rounded-lg shadow-md ">
        {/* search */}
        <div className="flex border-2 rounded w-1/2">
          <button className="flex items-center justify-center bg-white px-4 border-r">
            <svg
              className="w-6 h-6 text-gray-600"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path>
            </svg>
          </button>
          <input type="text" class="px-4 py-2 w-80" placeholder="Search..." />
        </div>

        {/* avatar */}
        <div className="flex items-center justify-center ">
          <span className="text-lg px-3 ">Lewandowski Robert </span>

          <img
            className="w-10 h-10 rounded-full"
            src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="avatar"
          />
        </div>
      </div>
      {/* nav */}
      <Nav page={page} />
      {/* main */}
      {/* <Routes>{getRoutes()}</Routes> */}
    </div>
  );
}

export default Main;
