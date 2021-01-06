import React, { Component } from 'react'
import Nav from "../layouts/nav"
import Breadcrumbs from "../layouts/breadcrumbs"
import ProductsAside from "../layouts/productsAside"
import ProductsFilter from "../layouts/productsFilter"
import ProductsListing from "../layouts/productsListing"
import Subscribe from "../layouts/subscribe"
import Footer from "../layouts/footer"
import Copyrights from "../layouts/copyrights"

export default class products extends Component {
    render() {
        return (
            <div>
                <Nav></Nav>
                <Breadcrumbs></Breadcrumbs>
                <section class="products-grid">
                    <div class="container-small">
                        <div class="row">
                            <ProductsAside></ProductsAside>
                            <div class="col-md-10 col-sm-10">
                                <ProductsFilter></ProductsFilter>
                                <ProductsListing></ProductsListing>
                            </div>
                        </div>
                    </div>
                </section>
                <Subscribe></Subscribe>
                <Footer></Footer>
                <Copyrights></Copyrights>
            </div>
        )
    }
}
