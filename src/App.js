import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Background from './components/Background/Background';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Skills from './components/Skills/Skills';
import { animateScroll as scroll } from 'react-scroll';
// import 'bootstrap/dist/css/bootstrap.min.css';



export default class App extends Component {

  componentDidMount() {
    // console.log('testing!')
    // let top = document.querySelector('.background')
    // window.scrollTo(0,0);
    scroll.scrollToTop();
    // window.scrollTop = 0;
    
  }



  render() {
    // this.anim();
    return (
      <div >
        <Navbar/>
        <Background />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    )
  }
}

