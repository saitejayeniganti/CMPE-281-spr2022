import React, { Component } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Form, Input, Button, Checkbox } from "antd";
import { Link } from "react-router-dom";
class SignUp extends Component {
  constructor(props) {
    super(props);
  }
  state = { username: "", password: "" };
  signup = () => {
    console.log(this.state.username);
    console.log(this.state.password);
    localStorage.setItem("username", JSON.stringify(this.state.username));
    localStorage.setItem("password", JSON.stringify(this.state.password));
  };
  render() {
    return (
      <>
        <div style={{ textAlign: "-webkit-center" }}>
          <div
            style={{
              width: "700px",
              background: "#DBE8F1",
              borderRadius: "20px",
              padding: "40px",
              paddingtop: "20px",
            }}
          >
            <div
              style={{
                textAlign: "center",
                fontSize: "32px",
                marginBottom: "20px",
              }}
            >
              SignUp
            </div>
            <label style={{ margin: "15px" }}>Username</label>
            <Input
              value={this.state.username}
              style={{ margin: "15px", width: "400px" }}
              onChange={(e) => this.setState({ username: e.target.value })}
            ></Input>
            <br />
            <label style={{ margin: "15px" }}>Password </label>
            <Input.Password
              value={this.state.password}
              style={{ margin: "15px", width: "400px" }}
              onChange={(e) => this.setState({ password: e.target.value })}
              placeholder="password"
            />
            <br></br>
            <Button
              type="primary"
              htmlType="submit"
              style={{ margin: "15px" }}
              onClick={() => this.signup()}
            >
              Signup
            </Button>
          </div>
        </div>
      </>
    );
  }
}

export default SignUp;
