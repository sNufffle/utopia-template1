import React, { Component } from 'react'
import Nav from "../layouts/nav"
import Breadcrumbs from "../layouts/breadcrumbs"
import ContactForm from "../layouts/contactform"
import Waterfall from "../layouts/waterfall"
import ContactContent from "../layouts/contactContent"
import Footer from "../layouts/footer"
import Copyrights from "../layouts/copyrights"

export default class contactus extends Component {
    render() {
        return (
            <div>
                <Nav></Nav>
                <Breadcrumbs></Breadcrumbs>
                <ContactForm></ContactForm>
                <Waterfall></Waterfall>
                <ContactContent></ContactContent>
                <Footer></Footer>
                <Copyrights></Copyrights>
            </div>
        )
    }
}
