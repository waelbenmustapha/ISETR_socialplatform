import React, { useEffect, useState } from "react";
import "./App.css";
import { routes, nav_routes } from "./utils/routes";
import { useAuthUser, useIsAuthenticated, useSignOut } from 'react-auth-kit'

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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./components/Navbar";
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

  }, [])
  return (
    <Router authType={'cookie'}
      authName={'_auth'}
      cookieDomain={window.location.hostname}
      cookieSecure={window.location.protocol === "https:"}>
      {/* Authenticated  */}
      {isAuthenticated() && (
        <div>
          <Navbar/>
          
          <Switch>{getNavRoutes()}</Switch>
        </div>
      )}
      {/* Not Authenticated */}


      {!isAuthenticated() && 
      <div>
       <Switch>{getRoutes()}</Switch>
      
      <Route render={() => <Redirect to="/signin" />}/>
      </div>
      }
    </Router>
  );
}

export default App;