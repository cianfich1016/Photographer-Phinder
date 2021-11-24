import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/NavBar";
import HomePage from "./components/Home";
import Login from "./components/LoginForm";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={Login} />
        {/* <Route render={() => <h1 className="display-2">Wrong page!</h1>} /> */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
