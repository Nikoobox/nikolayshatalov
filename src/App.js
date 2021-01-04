import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Background from './components/Background/Background';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Skills from './components/Skills/Skills';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './index.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Background />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    )
  }
}

