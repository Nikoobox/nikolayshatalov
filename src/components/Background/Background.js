import React, { Component } from 'react';
import './background.scss';
import { Link } from 'react-scroll';
import Particles from 'react-particles-js';

export default class Background extends Component {


    render() {
        return (
       
            <section className="background">
                <Particles
                    params={{
                        "particles": {
                            "number": {
                                "value": 60,
                                "density": {
                                    "enable": true,
                                    "value_area": 1500
                                }
                            },
                            "line_linked": {
                                "enable": true,
                                "opacity": 0.03
                            },
                            "move": {
                                "random":true,
                                // "direction": "right",
                                "speed": 0.4
                            },
                            "size": {
                                "random": true,
                                "value": 4,
                                // "color": "#3CA9D1",
                            },
                            "color":{
                                "value": ["#BD10E0", "#B8E986", "#50E3C2", "#FFD300", "#E86363"]
                            },
                            "opacity": {
                                "anim": {
                                    "enable": true,
                                    "speed": 1,
                                    "opacity_min": 0.1
                                }
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onclick": {
                                    "enable": true,
                                    "mode": "push"
                                }
                            },
                            // "events": {
                            //     "onhover": {
                            //         "enable": true,
                            //         "mode": "repulse"
                            //     }
                            // },
                            "modes": {
                                "push": {
                                    "particles_nb": 1
                                }
                            }
                        },
                        "retina_detect": true
                    }} />
              
                <div className="background-img">

                <div className="background-overlay"></div>
                </div>

                <div className="background-box">
                    <div className="background-text">Hello, I am Nikolay Shatalov.<br/> NYC based software engineer with experience in React, Redux, JS, Ruby on Rails, and passion for frontend development</div>
                    <Link href='/' className='background-button' to="contact-destination" smooth={true} duration={1200}>Say Hi</Link>
                </div>
            </section>
        )
    }
}
