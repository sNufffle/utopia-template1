import React, { Component } from 'react'
import Nav from "../layouts/nav"
import Breadcrumbs from "../layouts/breadcrumbs"
import Footer from "../layouts/footer"
import Copyrights from "../layouts/copyrights"
import ProductImage from '../components/imgs/product.jpg'

export default class cart extends Component {
    render() {
        return (
            <div>
                <Nav></Nav>
                <Breadcrumbs></Breadcrumbs>
                <section class="cart-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 col-md-12">
                                <h1 class="cart-title text-uppercase">
                                    cart
                                </h1>
                                <form action="#" class="cart">
                                    <div class="table-content table-responsive">
                                        <table class="form-table text-uppercase text-center">
                                            <thead>
                                                <tr>
                                                    <th>Image</th>
                                                    <th>product</th>
                                                    <th>price</th>
                                                    <th>quantity</th>
                                                    <th>total</th>
                                                    <th>Remove</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td class="cart-img">
                                                        <a href="#">
                                                            <img src={ProductImage} alt="" />
                                                        </a>
                                                    </td>
                                                    <td class="cart-product">
                                                        <a href="#">E-Commerce Template</a>
                                                    </td>
                                                    <td class="cart-amount">
                                                        <span>$600</span>
                                                    </td>
                                                    <td class="cart-quantity">
                                                        <input type="number" value="1" />
                                                    </td>
                                                    <td class="cart-total">$400</td>
                                                    <td class="cart-remove">
                                                        <a href="#"><i class="fas fa-times"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="cart-img">
                                                        <a href="#">
                                                            <img src={ProductImage} alt="" />
                                                        </a>
                                                    </td>
                                                    <td class="cart-product">
                                                        <a href="#">E-Commerce Template</a>
                                                    </td>
                                                    <td class="cart-amount">
                                                        <span>$600</span>
                                                    </td>
                                                    <td class="cart-quantity">
                                                        <input type="number" value="1" />
                                                    </td>
                                                    <td class="cart-total">$400</td>
                                                    <td class="cart-remove">
                                                        <a href="#"><i class="fas fa-times"></i></a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                </form>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-5 ml-auto">
                                <div class="cart-page-total">
                                    <h2>Cart Totals</h2>
                                    <ul>
                                        <li>Subtotal <span>$400</span></li>
                                        <li>Total <span>$400</span></li>
                                    </ul>
                                    <input class="btn-1 outline darkened white" value="Continue" type="submit" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer></Footer>
                <Copyrights></Copyrights>
            </div>
        )
    }
}
