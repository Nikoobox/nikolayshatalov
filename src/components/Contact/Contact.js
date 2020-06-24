import React, { Component } from 'react'
import './contact.scss';

export default class Contact extends Component {
    render() {
        return (
            <section className="contact-section">
            <div className="contact-title" id="contact-destination">Contact</div>
                <div className="row">
                    <div className="col-10 col-md-6 mx-auto">
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
                            <button className="contact-button" type="submit" value="Send">Submit</button>
                        </div>
                        </form>
                    </div>  
                </div>
            </section>
        )
    }
}
