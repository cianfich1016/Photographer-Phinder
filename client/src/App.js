import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
<<<<<<< HEAD
import Navbar from "./components/NavBar";
import HomePage from "./components/Home";
import Login from "./components/LoginForm";
import Footer from "./components/Footer";
=======
import SearchResults from "./components/SearchResults";
>>>>>>> main

function App() {
  return (
<<<<<<< HEAD
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={Login} />
        {/* <Route render={() => <h1 className="display-2">Wrong page!</h1>} /> */}
      </Switch>
      <Footer />
    </Router>
=======
    <div className="App">
      <SearchResults />
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
>>>>>>> main
  );
}

export default App;
