import React, { Component } from 'react'
import './contact.scss';
import nsImg from './ns_img.jpg'
import resume from './Nikolay_Shatalov_Resume_Frontend.pdf';

export default class Contact extends Component {



    render() {
        // stroke = 'transparent' strokeWidth = '0px'
        {/* <div className='wave'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" ><path fill="#1a394d" fillOpacity="1" d="M0,256L80,250.7C160,245,320,235,480,208C640,181,800,139,960,112C1120,85,1280,75,1360,69.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        </div>  */}
        return (
            // <>
            <section className="contact-section">
                <div className="contact-title" id="contact-destination">Contact</div>
                <div className='about-container'>
                    <div className='about-box '>
                        <div className='img-box anim' data-delay="0.2s">
                            <img src={nsImg} alt='Nikolay Shatalov' />
                        </div>
                        <div className='info anim' data-delay="0.4s">
                            <div className='info-text'>
                                When building an idea, a user’s experience is very important to me, so I strive to craft an interface that is innovative, visually appealing, and intuitive for everyone.
                                When I am not coding, you can find me cycling around NYC, running or mastering snowboarding tricks.

                            </div>

                            <a href={resume} target="_blank" rel='noopener noreferrer' className='anim' data-delay="0.8s">Download My Resume</a>
                        </div>

                    </div>

                </div>
                <div className="row">
                    <div className="col-10 col-md-6 mx-auto">
                        <div className='lets-connect'>Say Hi</div>
                        <form className="contact-form" method="POST" action="https://formspree.io/nikoobox@gmail.com">
                            <div className="form-group">
                                <input type="text" name="name" className="form-control" placeholder="Name" required/>
                                <input type="email" name="email" className="form-control" placeholder="Email@email.com" required/>
                                <input type="text" name="subject" className="form-control" placeholder="Subject" required/>
                            </div>
                            <div className="form">
                                <textarea name="message" className="form-control" cols="30" rows="7" placeholder="Message" required></textarea>
                            </div>
                            <div className="form-group contact-button-box">
                                <button className="contact-button" type="submit" value="Send">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        // </>
        )
    }
}

