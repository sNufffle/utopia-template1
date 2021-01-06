import React, { Component } from 'react'
import searchIcon from '../components/imgs/icon7.png'

export default class slide extends Component {
    render() {
        return (
            <section className="slider home-search">
            <div className="container">
                <div className="row">
                    <div className="slide-item-article col-lg-12 text-center">
                        <div>
                            <h3>from</h3>
                        </div>
                        <div>
                            <h1><strong>BEST SELLER</strong></h1>
                        </div>
                        <div className="slider-check-quotes">
                            <ul>
                                <li>50.000+ Web Template</li>
                                <li>Secure Shopping for Customers and Authors</li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <form action="#" className="subscribe_form d-flex justify-content-center">

                            <div className="col-lg-6">
                                <input className="subscribe-input" type="text"
                                    placeholder="Search over 10.000 products..."/>
                                <div className="button left-effect darkened white">
                                    <span className="button-wrapper">
                                        <span className="portfolio-icon"><img src={searchIcon} alt=""/></span>
                                        <span className="portfolio-text">Search</span>
                                    </span>
                                    <input className="subscribe-submit" type="submit"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        )
    }
}
