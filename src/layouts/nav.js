import React, { Component } from 'react'
import logoBlack from "../components/imgs/logo-black.png"
import $ from 'jquery'
import ProductImage from '../components/imgs/product.jpg'

export default class nav extends Component {
    render() {
        return (
            <header className="non-sticky">
                <div className="main-nav">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-3">
                                <nav className="categories menu">
                                    <ul className="clearfix">
                                        <li>
                                            <span>
                                                <a href="/" id="categories-accordion" onMouseEnter={() => activeHover("#categories-accordion2")}
                                                    onMouseLeave={() => deactiveHover("#categories-accordion2")}>
                                                    <span className="categories-structure categories-spin">
                                                        <span className="categories-box">
                                                            <span className="categories-inner">

                                                            </span>
                                                        </span>
                                                    </span>
                                                Categories
                                                </a>
                                            </span>
                                            <div id="menu">
                                                <ul className="" id="categories-accordion2" onMouseEnter={() => activeHover("#categories-accordion2")}
                                                    onMouseLeave={() => deactiveHover("#categories-accordion2")}>
                                                    <li>
                                                        <span>
                                                            <a href="#" className="">
                                                                Web Sites
                                                            </a>
                                                        </span>
                                                        <ul>
                                                            <li>
                                                                <a href="#">E-Commerce</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Corporate</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Personal</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Blog</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <a href="#" className="">
                                                                Web Sites
                                                            </a>
                                                        </span>
                                                        <ul>
                                                            <li>
                                                                <a href="#">E-Commerce</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Corporate</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Personal</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Blog</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="col-xl-6 col-lg-7 col-md-6 d-none d-md-block">
                                <a href="/" >
                                <img src={logoBlack} className="main-logo" alt="logo" />
                                </a>
                            </div>
                            <div class="col-xl-3 col-lg-2 col-md-3">
                                <ul class="right-pane">
                                    <li id="cart-menu" onMouseEnter={() => activeHover(".cart-menu")}
                                        onMouseLeave={() => deactiveHover(".cart-menu")}>
                                        <div id="dropdown-cart" class="dropdown dropdown-cart">
                                            <a href="cart" class="cart-bt">
                                                <strong>2</strong>
                                            </a>
                                            <div class="dropdown-menu cart-menu">
                                                <ul>
                                                    <li>
                                                        <a href="cart" class="underline-border">
                                                            <figure>
                                                                <img src={ProductImage} alt="" class="lazy-loaded" />
                                                            </figure>
                                                            <strong>
                                                                <span>1x UtopyaTasarim E-Commerce</span>

                                                            </strong>


                                                        </a>
                                                        <a href="#" class="action">
                                                            <i class="fas fa-minus"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="cart" class="underline-border">
                                                            <figure>
                                                                <img src={ProductImage} alt="" class="lazy-loaded" />
                                                            </figure>
                                                            <strong>
                                                                <span>1x UtopyaTasarim Corporate</span>
                                                            </strong>
                                                        </a>
                                                        <a href="#" class="action">
                                                            <i class="fas fa-minus"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <div class="total-drop">
                                                    <div class="clearfix">
                                                        <strong>Total</strong>
                                                        <span>$13000</span>
                                                    </div>
                                                    <a href="cart" class="btn-1 outline">View Cart</a>


                                                    <a href="#" class="btn-1 outline darkened white">Checkout</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="#" class="wishlist">
                                            <span>Wishlist</span>
                                        </a>
                                    </li>
                                    <li id="access-menu" onMouseEnter={() => activeHover(".access-menu")}
                                        onMouseLeave={() => deactiveHover(".access-menu")}>
                                        <div id="dropdown-access" class="dropdown dropdown-access">
                                            <a href="#" class="access-link">
                                                <span>Account</span>
                                            </a>
                                            <div class="dropdown-menu access-menu">
                                                <a href="#" class="btn-1 outline">Sign in</a>
                                                <ul class="customer-pane">
                                                    <li>
                                                        <a href="#" class="underline-border">
                                                            <i class="fas fa-shipping-fast"></i>Track Your Order
                                                </a>
                                                    </li>
                                                    <li>
                                                        <a href="cart" class="underline-border">
                                                            <i class="fas fa-box-open"></i>My Orders
                                                </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="underline-border">
                                                            <i class="far fa-user"></i>My Profile
                                                </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="underline-border">
                                                            <i class="fas fa-medkit"></i>Help Faq
                                                </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="#" class="btn-search">
                                            <span>Search</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="btn-category">
                                            <div class="categories-structure categories-spin">
                                                <div class="categories-box">
                                                    <div class="categories-inner"></div>
                                                </div>
                                            </div>Categories
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="logo-mobile">
                    </div>
                </div>
            </header>
        )
    }
}

// CATEGORIES HOVER

function activeHover(makeActive) {
    $(makeActive).addClass("active");
}

function deactiveHover(makeActive) {
    $(makeActive).removeClass("active");
}

// CATEGORIES HOVER

// NAVBAR FIXED

window.onscroll = function scrollappear() {
    if (window.pageYOffset > 1) {
        $('.main-nav').addClass("affix");
    }
    else {
        $('.main-nav').removeClass("affix");
    }
};

// NAVBAR FIXED