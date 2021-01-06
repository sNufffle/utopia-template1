import React, { Component } from 'react'
import iconFive from '../components/imgs/icon5.png'

export default class subscribe extends Component {
    render() {
        return (
            <section className="subscribe">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h5>stay tuned!</h5>
                            <h2>Join our newsletter and get updates.</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <form action="#" className="subscribe_form d-flex justify-content-center">

                                <div className="col-lg-6">
                                    <input className="subscribe-input" type="text" placeholder="Enter your email adress..." />
                                    <div className="button left-effect darkened white">
                                        <span className="button-wrapper">
                                            <span className="portfolio-icon"><img src={iconFive} alt="" /></span>
                                            <span className="portfolio-text">submit</span>
                                        </span>
                                        <input className="subscribe-submit" type="submit" value="submit" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <p className="subscribe-info">By subscribing newsletter you will get updates monthly</p>
                        </div>
                    </div>
                </div>

            </section>
        )
    }
}
