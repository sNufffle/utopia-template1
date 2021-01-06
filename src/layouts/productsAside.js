import React, { Component } from 'react'
import $ from 'jquery'

export default class productsAside extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 'active',
            activeSecond: 'disabled',
            activeThird: 'disabled',
            IconStatus: 'fa-minus',
            IconStatusSecond: 'fa-plus',
            IconStatusThird: 'fa-plus'
        };
    }
 
    render() {
        return (
            <div class="col-md-2 col-sm-2">
                <aside class="sidebar">
                    <div class="categories-widget">

                        <h4 class="text-uppercase widget-title">CATEGORIES</h4>

                        <div class="accordion-container">

                            <div class="accordion-list">

                                <a href="#" onClick={ () => this.state.active === 'active' ? (this.setState({active:'disabled'}), this.setState({IconStatus:'fa-plus'})) : ((this.setState({active:'active'}), this.setState({activeSecond: 'disabled'}), this.setState({activeThird: 'disabled'})),  (this.setState({IconStatus:'fa-minus'}), this.setState({IconStatusSecond: 'fa-plus'}), this.setState({IconStatusThird: 'fa-plus'})))}
                                class="text-uppercase" id="cat-web">Web Templates
                                        <i id="first-minus" className={'fa ' + this.state.IconStatus}></i>
                                </a>

                                <div id="cat-web-menu" className={'accordion-content ' + this.state.active}>
                                    <ul>
                                        <li>
                                            <a href="#">E-Commerce</a>
                                        </li>
                                        <li>
                                            <a href="#">Corporate</a>
                                        </li>
                                        <li>
                                            <a href="#">Personal Blog</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="accordion-container">

                            <div class="accordion-list">

                                <a href="#" onClick={ () => this.state.activeSecond === 'active' ? (this.setState({activeSecond:'disabled'}), this.setState({IconStatusSecond:'fa-plus'})) : ((this.setState({activeSecond:'active'}), this.setState({active: 'disabled'}), this.setState({activeThird: 'disabled'})),  (this.setState({IconStatusSecond:'fa-minus'}), this.setState({IconStatus: 'fa-plus'}), this.setState({IconStatusThird: 'fa-plus'})))}
                                class="text-uppercase" id="cat-graphic">Graphic Templates
                                        <i id="second-minus" className={'fa ' + this.state.IconStatusSecond}></i>
                                </a>

                                <div id="cat-graphic-menu" className={'accordion-content ' + this.state.activeSecond}>
                                    <ul>
                                        <li>
                                            <a href="#">PSD Templates</a>
                                        </li>
                                        <li>
                                            <a href="#">AI Templates</a>
                                        </li>
                                        <li>
                                            <a href="#">Responsive Templates</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-container">

                            <div class="accordion-list">

                                <a href="#" onClick={ () => this.state.activeThird === 'active' ? (this.setState({activeThird:'disabled'}), this.setState({IconStatusThird:'fa-plus'})) : ((this.setState({activeThird:'active'}), this.setState({activeSecond: 'disabled'}), this.setState({active: 'disabled'})),  (this.setState({IconStatusThird:'fa-minus'}), this.setState({IconStatusSecond: 'fa-plus'}), this.setState({IconStatus: 'fa-plus'})))}
                                id="cat-video" class="text-uppercase">Video Templates
                                        <i id="third-minus" className={'fa ' + this.state.IconStatusThird}></i>
                                </a>
                                <div id="cat-video-menu" className={'accordion-content ' + this.state.activeThird}>
                                    <ul>
                                        <li>
                                            <a href="#">Infographics</a>
                                        </li>
                                        <li>
                                            <a href="#">Product Promo</a>
                                        </li>
                                        <li>
                                            <a href="#">Premeiere Projects</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="categories-widget">
                        <h4 class="text-uppercase widget-title">CRITERIAS</h4>
                        <div class="accordion-second-content">
                            <ul>
                                <li>
                                    <label class="accordion-checkbox path">
                                        <input type="checkbox" />
                                        <svg viewBox="0 0 21 21">
                                            <path
                                                d="M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186">
                                            </path>
                                        </svg>
                                        <span>HTML5</span>
                                    </label>
                                </li>
                                <li>
                                    <label class="accordion-checkbox path">
                                        <input type="checkbox" />
                                        <svg viewBox="0 0 21 21">
                                            <path
                                                d="M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186">
                                            </path>
                                        </svg>
                                        <span>React App</span>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </aside>
            </div>
        )
        
    }
}

