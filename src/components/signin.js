import React, { Component } from "react";
import "antd/dist/antd.css";
import { Link, browserHistory } from "react-router-dom";
import { Form, Input, Button, Checkbox } from "antd";

class SignIn extends Component {
  constructor(props) {
    super(props);
  }
  state = { username: "", password: "" };
  signin = () => {
    console.log("in login ");
    console.log(this.state.username);
    console.log(this.state.password);
    if (
      this.state.username == JSON.parse(localStorage.getItem("username")) &&
      this.state.password == JSON.parse(localStorage.getItem("password"))
    ) {
      console.log("verified");
    } else window.alert("**** Invalid Credentials ****");
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
              Login
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
              placeholder=" password"
              onChange={(e) => this.setState({ password: e.target.value })}
            />
            <br></br>
            <Button
              type="primary"
              htmlType="submit"
              style={{ margin: "15px" }}
              onClick={() => this.signin()}
            >
              Login
            </Button>
          </div>
        </div>
      </>
    );
  }
}

export default SignIn;
