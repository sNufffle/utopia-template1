import React, { Component } from 'react'
import Logo from '../components/imgs/logo-black.png'

export default class productDescription extends Component {
    render() {
        return (
            <div class="product-description">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="author">
                                <div class="img-container">
                                    <div class="author-img text-center">
                                        <img src={Logo} alt="" />
                                    </div>
                                    <div class="author-description text-center">
                                        <p>Utopya Tasarım</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-9">
                            <ul class="product-nav clearfix">
                                <li class="active">
                                    <a href="#details" aria-controls="details" role="tab" data-toggle="tab" aria-expanded="true">
                                        <i class="icon icon-history"></i>
                                        <span>Details</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#author" aria-controls="about" role="tab" data-toggle="tab" aria-expanded="true">
                                        <i class="icon icon-history"></i>
                                        <span>Author</span>
                                    </a>
                                </li>
                            </ul>

                            <div class="description-content">
                                <div class="content-pane">
                                    <div class="content-pane-content">
                                        <h3>Product Details</h3>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores facilis quod labore? Sit nemo, sunt debitis quibusdam expedita ratione asperiores facilis corporis porro cumque incidunt possimus atque exercitationem est labore velit praesentium id corrupti quos autem placeat, eaque quia nihil! Doloribus voluptates et consectetur nemo architecto? Optio minus ullam fugit.
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores facilis quod labore? Sit nemo, sunt debitis quibusdam expedita ratione asperiores facilis corporis porro cumque incidunt possimus atque exercitationem est labore velit praesentium id corrupti quos autem placeat, eaque quia nihil! Doloribus voluptates et consectetur nemo architecto? Optio minus ullam fugit.
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores facilis quod labore? Sit nemo, sunt debitis quibusdam expedita ratione asperiores facilis corporis porro cumque incidunt possimus atque exercitationem est labore velit praesentium id corrupti quos autem placeat, eaque quia nihil! Doloribus voluptates et consectetur nemo architecto? Optio minus ullam fugit.
                                    </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
