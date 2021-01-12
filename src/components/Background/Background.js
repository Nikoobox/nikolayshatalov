import React, { Component } from 'react';
import './background.scss';
import { Link } from 'react-scroll';


export default class Background extends Component {


    render() {
        return (
       
            <section className="background">
                
                <div className="background-img">
                <div className="background-overlay"></div>
                </div>

                <div className="background-box">
                    <div className="background-text">Hello, I am Nikolay Shatalov.<br/> NYC based software engineer with experiece in React, Redux, JS, Ruby on Rails, and passion for frontend development</div>
                    <Link href='/' className='background-button' to="contact-destination" smooth={true} duration={1200}>Say Hi</Link>
                </div>
            </section>
        )
    }
}
