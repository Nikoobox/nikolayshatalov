import React, { Component } from 'react'
import './navbar.scss';
import { Link, animateScroll as scroll} from 'react-scroll';
import classnames from "classnames";

// import resume from '../../../public/docs/Nikolay_Shatalov_Resume.pdf';

export default class Navbar extends Component {
    constructor(props) {
        super(props);
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


      // <li><a href={`${resume}`} download className='nav-link' >Resume</a></li>
      
    render() {
        return (
            <nav className={classnames("nav-bar",{"nav-bar--hidden": !this.state.visible})}>
                <a href="/" className="name" aria-label="homepage" duration={5000} onClick={()=>{scroll.scrollToTop()}}>NS</a>

                <ul className="nav-links">

                    <li><Link href='/' className='nav-link' to="projects-destination" smooth={true} duration={1200}>Projects</Link></li>

                    <li><Link href='/' className='nav-link' to="contact-destination" smooth={true} duration={1200}>Contact</Link></li>
                </ul>  
            </nav>
        )
    }
}
