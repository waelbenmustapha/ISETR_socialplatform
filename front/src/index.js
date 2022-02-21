import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AuthProvider } from 'react-auth-kit'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import allReducers from "./state/reducers";


const store = createStore(allReducers)

ReactDOM.render(
  <AuthProvider authType={'cookie'}
    authName={'_auth'}
    cookieDomain={window.location.hostname}
    cookieSecure={window.location.protocol === "https:"}>

    <Provider store={store}>

      <App />


    </Provider>
  </AuthProvider>,
  document.getElementById("root")
);
