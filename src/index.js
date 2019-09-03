import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import App from "./components/App";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import firebase from "./firebase";
import registerServiceWorker from "./registerServiceWorker";

import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";

class Root extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.history.push("/");
      }
    });
  }

  componentWillUnmount() {
    // firebase.auth()..off();
  }

  render() {
    return (
      <>
        <Route path="/" exact component={App} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
      </>
    );
  }
}

const RootWithRouter = withRouter(Root);
ReactDOM.render(
  <Router>
    <RootWithRouter />
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
