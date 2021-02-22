import React, { Component } from 'react';
import './background.scss';
import { Link } from 'react-scroll';
import Particles from 'react-particles-js';
import waveImg from './wave.svg'

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
                {/* <div className='wave'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" ><path fill="#0d1d27" fillOpacity="1" d="M0,256L80,250.7C160,245,320,235,480,208C640,181,800,139,960,112C1120,85,1280,75,1360,69.3L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg></div>  */}

                {/* <div className='wave'>
                    <img src={waveImg} alt='wave-top'/>
                
                </div>  */}
                {/* stroke-width='0px' */}
{/* stroke='transparent' */}
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0d1d27" fill-opacity="1" d="M0,160L60,176C120,192,240,224,360,250.7C480,277,600,299,720,272C840,245,960,171,1080,144C1200,117,1320,139,1380,149.3L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg> */}
            </section>
        )
    }
}
