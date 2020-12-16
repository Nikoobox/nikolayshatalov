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
                    <li className="footer-social-item"><a href="https://www.facebook.com/nikolay.shatalov.13">Facebook</a></li>
                    <li className="footer-social-item"><a href="https://www.instagram.com/n.shtlv/">Instagram</a></li>
                    <li className="footer-social-item"><a href="https://www.linkedin.com/in/nikolay-shatalov-0963b28b/">LinkedIn</a></li>
                    <li className="footer-social-item"><a href="/">Github</a></li>
                </ul>
                <div className="footer-date">
                    © {this.getYear()} Nikolay Shatalov
                </div>
            </footer>
        )
    }
}
