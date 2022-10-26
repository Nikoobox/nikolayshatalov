import React from "react";
// import Navbar from "../Navbar/Navbar";
import Background from "../Background/Background";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
// import Footer from "../Footer/Footer";
import Skills from "../Skills/Skills";
// import { Route, Routes, Outlet } from "react-router-dom";

const Splash = () => {
  return (
    <>
      <Background />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default Splash;
