import React, { Component } from 'react';
import './background.scss';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import Img from './background_b.jpg';



export default class Background extends Component {
    render() {
        return (
       
            <section className="background">
                {/* <img src={Img} alt="back-img" className="background-image" /> */}
                <div className="background-img">
                <div className="background-overlay"></div>
                </div>

                <div className="background-box">
                    <div className="background-text">Hello, I am Nikolay Shatalov.<br/> NYC based engineer and web developer</div>
                    <Link href='/' className='background-button' to="contact-destination" smooth={true} duration={1200}>Say Hi</Link>
                </div>
            </section>
        )
    }
}
