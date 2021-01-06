import React, { Component } from 'react'
import productsItemImage from '../components/imgs/agacev.jpg'
import productsItemIconThird from '../components/imgs/icon3.png'

export default class productsItem extends Component {
    render() {
        return (
            <div class="portfolio-item product-item">
                        <div class="portfolio-label">best price</div>
                        <div class="portfolio-icons">
                            <a href="#"><i class="fa fa-heart-o"></i></a>
                        </div>
                        <div class="portfolio-preview">
                            <div class="portfolio-img">
                                <img src={productsItemImage} alt="" />
                            </div>
                        </div>
                        <div class="portfolio-title">
                            <a href="#">Agac Ev Projesi</a>
                        </div>
                        <div class="portfolio-description">
                            Lorem ipsum dolor sit amet.
                                </div>
                        <div class="portfolio-price">$630.00</div>
                        <div class="portfolio-buttons-wrapper">
                            <div class="portfolio-buttons">
                                <a class="button left-effect back-pinker dark-txt" href="#">
                                    <span class="button-wrapper">
                                        <span class="portfolio-icon">
                                            <i className="fas fa-external-link-alt"></i>
                                        </span>
                                        <span class="portfolio-text">Preview</span>
                                    </span>
                                </a>
                                <a class="button right-effect" href="#">
                                    <span class="button-wrapper">
                                        <span class="portfolio-icon">
                                            <img src={productsItemIconThird} alt="Add To Cart" />
                                        </span>
                                        <span class="portfolio-text">Add To Cart</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
        )
    }
}
