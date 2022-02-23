import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../components/landingpage";
import HomePage from "../components/home";

import SignIn from "../components/signin";
import SignUp from "../components/signup";

class AppRoutes extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route exact path="" element={<LandingPage />} />
          <Route exact path="/home" element={<HomePage />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    );
  }
}

export default AppRoutes;
