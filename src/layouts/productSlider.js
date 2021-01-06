import React, { Component } from 'react'
import SliderImg from '../components/imgs/agacev.jpg'

export default class productSlider extends Component {
    render() {
        return (
            <div class="col-md-6 col-sm-12 product-gallery">
                <section class="slider">
                    <img src={SliderImg} alt="" />
                </section>
            </div>
        )
    }
}

