import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/NavBar";
import HomePage from "./pages/Home";
import Login from "./components/LoginForm";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={Login} />
        {/* <Route render={() => <h1 className="display-2">Wrong page!</h1>} /> */}
      </Switch>
    </Router>
  );
}

export default App;
