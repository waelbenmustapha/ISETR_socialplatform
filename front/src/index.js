import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AuthProvider } from 'react-auth-kit'

ReactDOM.render(
  <AuthProvider authType = {'cookie'}
  authName={'_auth'}
  cookieDomain={window.location.hostname}
  cookieSecure={window.location.protocol === "https:"}>
    <App />
  </AuthProvider>,
  document.getElementById("root")
);
