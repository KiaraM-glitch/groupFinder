import React, { Fragment } from "react";
import { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Button, Container, Jumbotron, Col, Row } from "react-bootstrap";
import "./style.css";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    };
  }
  // Console logs data from the database
  getUserData = () => {
    API.getUser()
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // Posts data to the database
  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    API.saveUser({
      username,
      password,
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { username, password } = this.state;
    return (
      <Fragment>
        <body>
          <Jumbotron
            className="jumbotron"
            style={{
              textAlign: "center",
              fontSize: "20%",
              padding: "3%",
              backgroundColor: "#808080",
            }}
          >
            <div className="appName">
              <h1>The Friend Finder</h1>
            </div>
          </Jumbotron>

          <Container
            className="container"
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              backgroundColor: "#FFFF99",
              width: "30%",
              padding: "1%",
              marginTop: "2%",
            }}
          >
            <h2>Sign Up Page</h2>
            <Row>
              <Col>
                <div className="col">
                  <form className="login" onSubmit={this.handleSubmit}>
                    <p>Username:</p>
                    <input
                      name="username"
                      type="text"
                      value={username}
                      onChange={this.handleChange}
                      id="username-input"
                      placeholder="Username"
                    />
                    <p>Password:</p>
                    <input
                      name="password"
                      type="password"
                      value={password}
                      onChange={this.handleChange}
                      id="password-input"
                      placeholder="Password"
                    />
                    <br />
                    <br />
                    <Link to="/questions">
                      <Button
                        style={{
                          fontWeight: "bolder",
                          marginBottom: "5%",
                          marginTop: "1%",
                          backgroundColor: "greenyellow",
                        }}
                        as="input"
                        type="submit"
                        value="Submit"
                        onClick={this.getUserData}
                      />{" "}
                    </Link>
                  </form>
                </div>
              </Col>
            </Row>
          </Container>
        </body>
      </Fragment>
    );
  }
}

export default SignUp;
