import React, { Component } from "react";

class HomePage extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <>
        <div
          style={{
            fontFamily: "bold",
            fontSize: "50px",
            paddingLeft: "30%",
            marginTop: "5%",
          }}
        >
          Welcome to CMPE 281.
          <br />
          Assignment 1
          <br />
          Playing with Amazon’s EC2
        </div>
      </>
    );
  }
}

export default HomePage;
