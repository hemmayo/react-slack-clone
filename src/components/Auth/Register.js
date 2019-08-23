import React, { Component } from "react";
import firebase from "../../firebase";
import {
  Grid,
  Button,
  Segment,
  Form,
  Header,
  Message,
  Icon
} from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
    errors: [],
    loading: false
  };

  displayErrors = errors =>
    errors.map((error, idx) => <p key={idx}>{error.message}</p>);

  isFormValid = () => {
    let errors = [...this.state.errors];
    let error;

    if (this.isFormEmpty(this.state)) {
      error = { message: "Fill in all fields" };
      this.setState({ errors: errors.concat(error) });
      return false;
    } else if (!this.isPasswordValid(this.state)) {
      error = { message: "Password is invalid" };
      this.setState({ errors: errors.concat(error) });
    } else {
      return true;
    }
  };

  isFormEmpty = ({ username, email, password, password_confirmation }) => {
    return (
      !username.length ||
      !email.length ||
      !password.length ||
      !password_confirmation.length
    );
  };

  isPasswordValid = ({ password, password_confirmation }) => {
    return password.length > 6 || password_confirmation > 6
      ? password === password_confirmation
      : false;
  };

  handleFormChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    if (this.isFormValid()) {
      this.setState({ errors: [], loading: true });
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(createdUser => {
          console.log(createdUser);
          this.setState({ loading: false });
        })
        .catch(error => {
          console.error(error);
          this.setState({
            loading: false,
            err: this.state.errors.concat(error)
          });
        });
    }
  };
  render() {
    const {
      email,
      password,
      password_confirmation,
      username,
      errors,
      loading
    } = this.state;

    return (
      <Grid textAlign="center" verticalAlign="middle" className="app">
        <Grid.Column style={{ maxWidth: "450px" }}>
          <Header as="h2" icon color="orange" textAlign="center">
            <Icon name="chat" color="orange" />
            Register for Slack
          </Header>
          <Form size="large" onSubmit={this.handleSubmit}>
            <Segment stacked>
              {errors.length > 0 && (
                <Message negative>{this.displayErrors(errors)}</Message>
              )}

              <Form.Input
                fluid
                name="username"
                value={username}
                icon="user"
                iconPosition="left"
                placeholder="Username"
                type="text"
                onChange={this.handleFormChange}
              />
              <Form.Input
                fluid
                name="email"
                value={email}
                icon="mail"
                iconPosition="left"
                placeholder="Email address"
                type="email"
                onChange={this.handleFormChange}
              />
              <Form.Input
                fluid
                name="password"
                value={password}
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                onChange={this.handleFormChange}
              />
              <Form.Input
                fluid
                name="password_confirmation"
                value={password_confirmation}
                icon="repeat"
                iconPosition="left"
                placeholder="Confirm Password"
                type="password"
                onChange={this.handleFormChange}
              />
              <Button
                disabled={loading}
                className={loading ? "loading" : ""}
                color="orange"
                size="large"
                fluid
              >
                Register
              </Button>
            </Segment>
          </Form>
          <Message>
            Already a user? <Link to="/login">Login</Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}
