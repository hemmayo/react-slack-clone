import React, { Component } from "react";
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
import firebase from "../../firebase";

export default class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    password_confirmation: ""
  };

  handleFormChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(createdUser => {
        console.log(createdUser);
      })
      .catch(error => {
        console.error(error);
      });
  };
  render() {
    const { email, password, password_confirmation, username } = this.state;
    return (
      <Grid textAlign="center" verticalAlign="middle" className="app">
        <Grid.Column style={{ maxWidth: "450px" }}>
          <Header as="h2" icon color="orange" textAlign="center">
            <Icon name="chat" color="orange" />
            Register for Slack
          </Header>
          <Form size="large" onSubmit={this.handleSubmit}>
            <Segment stacked>
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
              <Button color="orange" size="large" fluid>
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
