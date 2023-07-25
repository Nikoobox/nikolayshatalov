import React, { useEffect } from "react";
import SnackbarProvider from "react-simple-snackbar";
import { animateScroll as scroll } from "react-scroll";
import { Route, Routes, Outlet } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Splash from "./components/Splash/Splash";

const App = () => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

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
};

export default App;
