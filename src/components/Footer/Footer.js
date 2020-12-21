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
                    {/* <li className="footer-social-item"><a href="https://www.facebook.com/nikolay.shatalov.13" rel='noopener noreferrer' target="_blank">Facebook</a></li>
                    <li className="footer-social-item"><a href="https://www.instagram.com/n.shtlv/" rel='noopener noreferrer' target="_blank">Instagram</a></li> */}
                    <li className="footer-social-item"><a href="https://www.linkedin.com/in/nikolay-shatalov-0963b28b/" rel='noopener noreferrer' target="_blank">LinkedIn</a></li>
                    <li className="footer-social-item"><a href="https://github.com/Nikoobox" rel='noopener noreferrer' target="_blank">Github</a></li>
                    <li className="footer-social-item"><a href="#" rel='noopener noreferrer' target="_blank">AngelList</a></li>
                </ul>
                <div className="footer-date">
                    © {this.getYear()} Nikolay Shatalov
                </div>
            </footer>
        )
    }
}
