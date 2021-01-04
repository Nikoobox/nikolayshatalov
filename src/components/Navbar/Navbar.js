import React, { Component } from 'react'
import './navbar.scss';
import { Link, animateScroll as scroll} from 'react-scroll';
import classnames from "classnames";
// import { Document } from 'react-pdf'
// import resume from '../../docs/nikolay_shatalov_resume.pdf';

export default class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
          prevScrollpos: window.pageYOffset,
          visible: true
        };
      }

      componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
      }
    
      componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
      }
    
      // Hide or show the menu.
      handleScroll = () => {
        const { prevScrollpos } = this.state;
        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollpos > currentScrollPos;
        if (currentScrollPos>300){
          this.setState({
            prevScrollpos: currentScrollPos,
            visible
          });
        }
        
      };
      
    render() {
        return (
            <nav className={classnames("nav-bar",{"nav-bar--hidden": !this.state.visible})}>
                <a href="/" className="name" aria-label="homepage" duration={5000} onClick={()=>{scroll.scrollToTop()}}>NS</a>

                <ul className="nav-links">

                    <li><Link href='/' className='nav-link' to="skills-destination" smooth={true} duration={1200}>Skills</Link></li>

                    <li><Link href='/' className='nav-link' to="projects-destination" smooth={true} duration={1200}>Projects</Link></li>

                    <li><Link href='/' className='nav-link' to="contact-destination" smooth={true} duration={1200}>Contact</Link></li>

                    {/* <li><a href={resume} className='nav-link' target="_blank" rel='noopener noreferrer'>Resume</a></li> */}

                    {/* <li>
                      <Document
                        file='./nikolay_shatalov_resume.pdf' 
                        className='nav-link' 
                        to="contact-destination" 
                        smooth={true} 
                        duration={1200}>
                        Contact
                      </Document>
                    </li> */}

                </ul>  
            </nav>
        )
    }
}
