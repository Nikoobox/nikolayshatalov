import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Background from './components/Background/Background';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Background />
        <Projects />
        <Contact />
        <Footer />
      </div>
    )
  }
}

