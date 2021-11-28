import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/NavBar";
import HomePage from "./components/home";
import Login from "./components/LoginForm";
import Footer from "./components/Footer";
import SearchResults from "./components/SearchResults";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import Update from "./components/Update"
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={Login} />
          <Route path="/searchresults" component={SearchResults} />
          <Route path="/profile" component={Profile} />
          <Route path="/signup" component={SignUp} />
          <Route path="/update" component={Update} />
          {/* <Route render={() => <h1 className="display-2">Wrong page!</h1>} /> */}
        </Switch>
        <Footer />
      </Router>
      <div className="App">
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      </div>
    </>
  );
}

export default App;
