import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Signup from "./pages/SignUpPage";
import NewsFeedPage from "./pages/NewsFeed";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={NewsFeedPage} />
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/SignUpPage" component={Signup} />
        <Route exact path="/LoginPage" component={LoginPage} />
      </Switch>
    </Router>
  );
}

export default App;
