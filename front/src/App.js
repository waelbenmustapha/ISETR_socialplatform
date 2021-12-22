import { useEffect, useState } from "react";
import "./App.css";
import { routes, nav_routes } from "./utils/routes";
import {useAuthUser,useIsAuthenticated,useSignOut} from 'react-auth-kit'

import Nav from "./widgets/Nav";
import {
  BrowserRouter as Router,
  // Routes,
  Route,
  Link,
  useParams,
  Switch,
  Redirect,
} from "react-router-dom";
function App() {

  const auth = useAuthUser()

  const isAuthenticated = useIsAuthenticated()

  const signOut = useSignOut()

  const page = window.location.pathname.split("/")[1];

  const getRoutes = () => {
    return routes.map((route) => {
      return <Route path={route.path} component={route.component} />;
    });
  };
  const getNavRoutes = () => {
    return nav_routes.map((route) => {
      return <Route path={route.path} component={route.component} />;
    });
  };

  useEffect(() => {
    console.log("is he ?")
   console.log(isAuthenticated());
  }, [])
  return (
    <Router authType = {'cookie'}
    authName={'_auth'}
    cookieDomain={window.location.hostname}
    cookieSecure={window.location.protocol === "https:"}>
      {/* Authenticated  */}
      {isAuthenticated() && (
        <div className=" h-screen bg-gray-100 overflow-hidden grid gap-3 font-test grid-cols-5 grid-rows-9 px-3 pt-3       ">
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
            <input
              type="text"
              className="px-4 py-2 w-80"
              placeholder="Search..."
            />
          </div>

          {/* avatar */}
          <div onClick={() => {signOut()}}>Logout</div>
          <p> {isAuthenticated()?"yes":"no"}</p>
          <div className="flex items-center justify-center ">
            <span className="text-lg px-3 ">{auth()?.name}</span>

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
          <Switch>{getNavRoutes()}</Switch>
        </div>
      )}
      {/* Not Authenticated */}
      {!isAuthenticated() && <Switch>{getRoutes()}</Switch>}

      {isAuthenticated() && <Route render={() => <Redirect to="/feed" />} />}

      {!isAuthenticated() && <Route render={() => <Redirect to="/signin" />} />}
    </Router>
  );
}

export default App;
