import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Background from './components/Background/Background';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Skills from './components/Skills/Skills';
import 'bootstrap/dist/css/bootstrap.min.css';



export default class App extends Component {

  componentDidMount() {
    document.querySelector('html').scrollTo(0, 0);
  }

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

