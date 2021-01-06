import React, { Component } from 'react'
import Icon from '../components/imgs/icon3.png'

export default class productInfo extends Component {
    render() {
        return (
            <div class="col-md-4 col-sm-12 product-info">
                <h1 class="title">
                    Utopya Tasarim Template
                            <small>E-Commerce / MultiPage / Corporate</small>
                </h1>
                <div class="product-detail">
                    <div class="product-detail-price">
                        <span>
                            200$
                                    <small>249$</small>
                        </span>
                    </div>
                    <hr />
                    <div class="product-detail-info first-info">
                        <span>
                            <strong>Author</strong>
                        </span>
                        <span>
                            Utopya Tasarim
                                </span>
                    </div>
                    <div class="product-detail-info first-info">
                        <span>
                            <strong>Created With</strong>
                        </span>
                        <span>
                            HTML5, CSS, JQUERY
                                </span>
                    </div>
                    <div class="product-detail-info first-info">
                        <span>
                            <strong>Availability</strong>
                        </span>
                        <span>
                            Linux, ReactJS
                                </span>
                    </div>
                    <hr />
                    <div class="product-detail-info second-info">
                    </div>
                    <div class="product-detail-info first-info"></div>
                    <div class="product-detail-info first-info">
                        <a href="#" class="btn-product darkened">
                            <span class="button-wrapper">
                                <span class="btn-product-icon">
                                    <img src={Icon} alt="" />
                                </span>
                                <span id="white" class="btn-product-text">
                                    SHOP
                                        </span>
                            </span>
                        </a>
                        <a href="#" class="btn-product">
                            <span class="button-wrapper">
                                <span class="btn-product-icon">
                                    <i class="fas fa-heart"></i>
                                </span>
                                <span class="btn-product-text btn-product-text2">
                                    Add To Favorites
                                        </span>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
