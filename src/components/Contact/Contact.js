import React, { Component } from 'react'
import './contact.scss';
import nsImg from './ns_img.jpg'
import resume from './nikolay_shatalov_resume_jan_2021.pdf';
// import resume from '../../docs/nikolay_shatalov_resume_jan_2021.pdf';

export default class Contact extends Component {
    render() {
        
        return (
            <section className="contact-section">
                <div className="contact-title" id="contact-destination">Contact</div>
                <div className='about-container'>
                    <div className='about-box'>
                        <div className='img-box'>
                            <img src={nsImg} alt='Nikolay Shatalov'/>
                        </div> 
                        <div className='info'>
                            <div className='info-text'>
                            {/* I am a software engineer with a passion for React, Redux and frontend web development.  */}
                            When building an idea, a user’s experience is very important to me, so I strive to craft an interface that is innovative, visually appealing, and intuitive for everyone.
                            When I am not coding, you can find me cycling around NYC, running or mastering snowboarding tricks.

                            </div>

                            <a href={resume} target="_blank" rel='noopener noreferrer'>Download My Resume</a>
                        </div> 

                    </div>
                
                </div> 
                <div className="row">
                    <div className="col-10 col-md-6 mx-auto">
                        <div className='lets-connect'>Say Hi</div> 
                        <form className="contact-form" method="POST" action="https://formspree.io/nikoobox@gmail.com">
                        <div className="form-group">
                            <input type="text" name="name" className="form-control" placeholder="Name"/>
                            <input type="email" name="email" className="form-control" placeholder="Email@email.com"/>
                            <input type="text" name="subject" className="form-control" placeholder="Subject"/>
                        </div>
                        <div className="form"> 
                            <textarea name="message" className="form-control" cols="30" rows="7" placeholder="Message"></textarea>
                        </div>
                        <div className="form-group contact-button-box">
                            <button className="contact-button" type="submit" value="Send">Send</button>
                        </div>
                        </form>
                    </div>  
                </div>
            </section>
        )
    }
}
