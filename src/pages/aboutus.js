import React, { Component } from 'react'
import Nav from "../layouts/nav"
import Breadcrumbs from "../layouts/breadcrumbs"
import AboutArticle from "../layouts/aboutArticle"
import Waterfall from "../layouts/waterfall"
import References from "../layouts/references"
import Subscribe from "../layouts/subscribe"
import Footer from "../layouts/footer"
import Copyrights from "../layouts/copyrights"

export default class aboutus extends Component {
    render() {
        return (
            <div>
                <Nav></Nav>
                <Breadcrumbs></Breadcrumbs>
                <AboutArticle></AboutArticle>
                <Waterfall></Waterfall>
                <References></References>
                <Subscribe></Subscribe>
                <Footer></Footer>
                <Copyrights></Copyrights>
            </div>
        )
    }
}
