import React, { Component } from 'react'
import agacEv from '../components/imgs/agacev.jpg'
import productsItemIconThird from '../components/imgs/icon3.png'
import $ from 'jquery'

export default class bestsellers extends Component {
    render() {
        return (
            <div>
                <div className="container padding-top-60px">
                    <div className="text-center">
                        <div className="simple-article">new arrivals</div>
                        <div className="h2">something new for you</div>
                        <div className="title-underline text-center"><span class="darkened"></span></div>
                    </div>
                </div>

                <section onMouseEnter={() => waterfallHover()}>
                    <div className="tabs-block clearfix">
                        <div className="container">
                            <div className="text-center">
                                <ul className="portfolio-header">
                                    <li>
                                        <a href="#" className="portfolio-header-item active">Best Sellers</a>
                                    </li>
                                    <li>
                                        <a href="#" className="portfolio-header-item">E-Commerce</a>
                                    </li>
                                    <li>
                                        <a href="#" className="portfolio-header-item">Personal Blog</a>
                                    </li>
                                    <li>
                                        <a href="#" className="portfolio-header-item">One Page</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="portfolio-wrapper">
                            <div className="portfolio-cart">

                                <div className="portfolio-item">
                                    <div className="portfolio-label">best price</div>
                                    <div className="portfolio-icons">
                                        <a href="#"><i class="fas fa-heart heart-hover"></i></a>
                                    </div>
                                    <div className="portfolio-preview">
                                        <div className="portfolio-img">
                                            <img src={agacEv} alt="" />
                                        </div>
                                    </div>
                                    <div className="portfolio-title">
                                        <a href="#">Agac Ev Projesi</a>
                                    </div>
                                    <div className="portfolio-description">
                                        Lorem ipsum dolor sit amet.
                                    </div>
                                    <div className="portfolio-price">$630.00</div>
                                    <div className="portfolio-buttons-wrapper">
                                        <div className="portfolio-buttons">
                                            <a className="button left-effect back-pinker dark-txt" href="#">
                                                <span className="button-wrapper">
                                                    <span className="portfolio-icon">
                                                        <i className="fas fa-external-link-alt"></i>
                                                    </span>
                                                    <span className="portfolio-text">Preview</span>
                                                </span>
                                            </a>
                                            <a className="button right-effect" href="#">
                                                <span className="button-wrapper">
                                                    <span className="portfolio-icon">
                                                        <img src={productsItemIconThird} alt="Add To Cart" />
                                                    </span>
                                                    <span className="portfolio-text">Add To Cart</span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

//WATERFALL COUNTER

let IsLoadedOnce = false;

function waterfallHover() {
    waterfallAppear();
}

function waterfallAppear() {  
   if (IsLoadedOnce === false) {
    $('.waterfall-numbers').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
   }
   IsLoadedOnce = true;
};

//WATERFALL COUNTER