import React, { Component } from 'react'
import ProductsItem from "../layouts/productsItem"

export default class productsListing extends Component {
    render() {
        return (
            <div class="row">
                <div class="product-container">
                    <ProductsItem></ProductsItem>
                </div>
            </div>
        )
    }
}
