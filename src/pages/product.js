import React, { Component } from 'react'
import Nav from "../layouts/nav"
import Breadcrumbs from "../layouts/breadcrumbs"
import ProductInfo from "../layouts/productInfo"
import ProductDescription from "../layouts/productDescription"
import ProductSlider from "../layouts/productSlider"
import Subscribe from "../layouts/subscribe"
import Footer from "../layouts/footer"
import Copyrights from "../layouts/copyrights"

export default class product extends Component {
    render() {
        return (
            <div>
                <Nav></Nav>
                <Breadcrumbs></Breadcrumbs>

                <section class="product-detail-section">
                    <div class="container">
                        <div class="row">
                            <ProductInfo></ProductInfo>
                            <div class="col-md-2">
                            </div>
                            <ProductSlider></ProductSlider>
                        </div>
                    </div>
                    <ProductDescription></ProductDescription>
                </section>

                <Subscribe></Subscribe>
                <Footer></Footer>
                <Copyrights></Copyrights>
            </div>
        )
    }
}
