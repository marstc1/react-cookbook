import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { UserContext } from "./context/UserContext";

ReactDOM.render(
  <Router>
    <UserContext.Provider value='hello from context'>
      <App />
    </UserContext.Provider>
  </Router>,
  document.getElementById("root")
);
