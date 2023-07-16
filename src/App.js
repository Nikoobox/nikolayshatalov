import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
// import Test from "./components/Test/Test";
import Footer from "./components/Footer/Footer";
import Splash from "./components/Splash/Splash";
import { animateScroll as scroll } from "react-scroll";
import { Route, Routes, Outlet } from "react-router-dom";

export default class App extends Component {
  componentDidMount() {
    scroll.scrollToTop();
  }

  render() {
    return (
      <>
        <Navbar />
        <Routes element={<Outlet />}>
          <Route path="/" element={<Splash />} />
          {/* <Route path="/test" element={<Test />} /> */}
        </Routes>
        <Footer />
      </>
    );
  }
}
