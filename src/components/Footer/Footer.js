import React, { Component } from 'react'
import './footer.scss';


export default class Footer extends Component {

    getYear() {
        return new Date().getFullYear();
    }

    render() {
        return (
            <footer className="footer">
                <ul className="footer-social">
                    <li className="footer-social-item"><a href="https://www.linkedin.com/in/nikolay-shatalov-0963b28b/" rel='noopener noreferrer' target="_blank">LinkedIn</a></li>
                    <li className="footer-social-item"><a href="https://github.com/Nikoobox" rel='noopener noreferrer' target="_blank">Github</a></li>
                    {/* <li className="footer-social-item"><a href="https://angel.co/u/nikolay-shatalov" rel='noopener noreferrer' target="_blank">AngelList</a></li> */}
                    <li className="footer-social-item"><a href="mailto:nikoobox@gmail.com">Email</a></li>

                </ul>
                <div className="footer-date">
                    © {this.getYear()} Nikolay Shatalov
                </div>
            </footer>
        )
    }
}
