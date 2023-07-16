import React, { Component } from "react";
import SnackbarProvider from "react-simple-snackbar";
import { animateScroll as scroll } from "react-scroll";
import { Route, Routes, Outlet } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Splash from "./components/Splash/Splash";

export default class App extends Component {
  componentDidMount() {
    scroll.scrollToTop();
  }

  render() {
    return (
      <>
        <Navbar />
        <SnackbarProvider>
          <Routes element={<Outlet />}>
            <Route path="/" element={<Splash />} />
          </Routes>
        </SnackbarProvider>
        <Footer />
      </>
    );
  }
}
