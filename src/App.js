import React, { useState } from "react";
import "./App.css";
import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { UserContext } from "./context/UserContext";

function App() {
  const [value, setValue] = useState("Hello from context");

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
      <UserContext.Provider value={{ value, setValue }}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
        </Switch>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
