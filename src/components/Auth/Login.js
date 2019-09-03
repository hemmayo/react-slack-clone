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

export default class Login extends Component {
  state = {
    email: "",
    password: "",
    errors: [],
    loading: false
  };

  displayErrors = errors => {
    return [...new Set(errors.map(e => e.message))].map((message, idx) => (
      <p key={idx}>{message}</p>
    ));
    // return <p>{errors[0].message}</p>;
  };

  handleFormChange = evt => {
    this.setState({ errors: [], [evt.target.name]: evt.target.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    if (this.isFormValid(this.state)) {
      this.setState({ errors: [], loading: true });

      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(signedInUser => {
          console.log(signedInUser);
        })
        .catch(err => {
          console.error(err);
          this.setState({
            errors: this.state.errors.concat(err)
          });
        })
        .finally(() => {
          this.setState({
            loading: false
          });
        });
    }
  };

  isFormValid = ({ email, password }) => email && password;

  handleInputError = (errors, inputField) => {
    return errors.some(error =>
      error.message.toLowerCase().includes(inputField)
    )
      ? "error"
      : "";
  };
  render() {
    const { email, password, errors, loading } = this.state;

    return (
      <Grid textAlign="center" verticalAlign="middle" className="app">
        <Grid.Column style={{ maxWidth: "450px" }}>
          <Header as="h2" icon color="orange" textAlign="center">
            <Icon name="chat" color="orange" />
            Login to Slack
          </Header>
          <Form size="large" onSubmit={this.handleSubmit}>
            <Segment stacked>
              {errors.length > 0 && (
                <Message negative>{this.displayErrors(errors)}</Message>
              )}

              <Form.Input
                fluid
                name="email"
                className={this.handleInputError(errors, "email")}
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
                className={this.handleInputError(errors, "password")}
                value={password}
                icon="lock"
                iconPosition="left"
                placeholder="Password"
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
                Log in
              </Button>
            </Segment>
          </Form>
          <Message>
            Don't have an account? <Link to="/register">Register</Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}
