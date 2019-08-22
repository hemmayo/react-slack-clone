import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import registerServiceWorker from "./registerServiceWorker";

import { BrowserRouter as Router, Route } from "react-router-dom";

const Root = () => (
  <Router>
    <Route path="/" exact component={App} />
    <Route path="/login" exact component={Login} />
    <Route path="/register" exact component={Register} />
  </Router>
);
ReactDOM.render(<Root />, document.getElementById("root"));
registerServiceWorker();
