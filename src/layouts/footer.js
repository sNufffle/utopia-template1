import React, { Component } from 'react'
import referenceImage from '../components/imgs/logo-black.png'

export default class footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="footer-container">
                                <h4>about store</h4>
                                <ul className="footer-adress">
                                    <li><i className="fa fa-home"></i><span>234 Heaven Stress, Beverly Hill.</span></li>
                                    <li><i className="fa fa-phone"></i><span>(800) 123 456 789</span></li>
                                    <li><i className="far fa-envelope"></i><a href="mailto:info@utopyatasarim.com">info@utopyatasarim.com</a></li>
                                    <li>
                                        <span><img src={referenceImage} alt="logo" /></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="footer-container">
                                <h4>My Account</h4>
                                <ul className="footer-underline">
                                    <li><a href="#.">My Account</a></li>
                                    <li><a href="#.">Login</a></li>
                                    <li><a href="#.">My Cart</a></li>
                                    <li><a href="#.">Wishlist</a></li>
                                    <li><a href="#.">Checkout</a></li>
                                    <li><a href="#.">Userinfo</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="footer-container">
                                <h4>INFORMATION</h4>
                                <ul className="footer-underline">
                                    <li><a href="#.">My Account</a></li>
                                    <li><a href="#.">Login</a></li>
                                    <li><a href="#.">My Cart</a></li>
                                    <li><a href="#.">Wishlist</a></li>
                                    <li><a href="#.">Checkout</a></li>
                                    <li><a href="#.">Userinfo</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="footer-container">
                                <h4>Customer Service</h4>
                                <ul className="footer-underline">
                                    <li><a href="#">Shipping Policy</a></li>
                                    <li><a href="#">Compensation First</a></li>
                                    <li><a href="#">My Account</a></li>
                                    <li><a href="#">Return Policy</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="#">Shipping Info</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
