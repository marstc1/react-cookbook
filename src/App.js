import React, { useState, useMemo } from "react";
import "./App.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { UserContext } from "./context/UserContext";
import { Navigation } from "./components/Navigation";
import { Weather } from "./pages/Weather";

function App() {
  const [user, setUser] = useState();
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <Router>
      <Navigation />
      <UserContext.Provider value={value}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/weather' component={Weather} />
        </Switch>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
