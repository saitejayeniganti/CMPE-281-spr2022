import React, { Component } from "react";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

import Button from "@mui/material/Button";

class LandingPage extends Component {
  constructor(props) {
    super(props);
  }
  state = { redirtologin: false, redirtosignup: false };
  render() {
    // let redirtologin = null;
    // if (this.state.redirtologin) {
    //   redirtologin = <Redirect to="/signin" />;
    // }
    // let redirtosignup = null;
    // if (this.state.redirtosignup) {
    //   redirtosignup = <Redirect to="/signup" />;
    // }
    return (
      <>
        <div>
          <div style={{ paddingLeft: "45%", paddingTop: "10%" }}>
            <button
              style={{
                padding: "15px",
                background: "#add8e6",
                border: "0px",
                borderRadius: "5px",
                paddingLeft: "25px",
                paddingRight: "25px",
              }}
            >
              <Link
                to="/signin"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                Login
              </Link>
            </button>
            <button
              style={{
                padding: "15px",
                background: "#add8e6",
                border: "0px",
                borderRadius: "5px",
                paddingLeft: "25px",
                paddingRight: "25px",
                marginLeft: "20px",
              }}
            >
              <Link
                to="/signup"
                style={{ textDecoration: "none", color: "white" }}
              >
                SignUp
              </Link>
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default LandingPage;
