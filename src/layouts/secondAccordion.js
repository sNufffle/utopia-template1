import React, { Component } from 'react'

export default class secondAccordion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 'active',
            activeSecond: 'disabled',
            activeThird: 'disabled'
        };
    }
    render() {
        return (
            <div class="about-accordion">
                                <div class="about-accordion-container">
                                    <div class="accordion-item">
                                        <div className={'accordion-item-heading ' + this.state.active}>
                                            <a onClick={ () => this.state.active === 'active' ? this.setState({active:'disabled'}) : (this.setState({active:'active'}), this.setState({activeSecond: 'disabled'}), this.setState({activeThird: 'disabled'}))}
                                            href="#faq1" class="accordion-item-title">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, est?
                                        </a>
                                        </div>
                                        <div id="faq1" className={'accordion-item-content ' + this.state.active}>
                                            <div class="item-content-container clearfix">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptates
                                                unde debitis repellat tempora totam distinctio obcaecati, earum vero a!</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="accordion-item">
                                        <div className={'accordion-item-heading ' + this.state.activeSecond}>
                                            <a onClick={ () => this.state.activeSecond === 'active' ? this.setState({activeSecond:'disabled'}) : (this.setState({activeSecond:'active'}), this.setState({active: 'disabled'}), this.setState({activeThird: 'disabled'}))}
                                            href="#" class="accordion-item-title">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, est?
                                        </a>
                                        </div>
                                        <div className={'accordion-item-content ' + this.state.activeSecond}>
                                            <div class="item-content-container clearfix">
                                                <p>Lorem ipsum dolor sit amet.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="accordion-item accordion-last-item">
                                        <div id="faqHeadingThird" className={'accordion-item-heading ' + this.state.activeThird}>
                                            <a onClick={ () => this.state.activeThird === 'active' ? this.setState({activeThird:'disabled'}) : (this.setState({activeThird:'active'}), this.setState({activeSecond: 'disabled'}), this.setState({active: 'disabled'}))}
                                            href="#" class="accordion-item-title">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        </a>
                                        </div>
                                        <div className={'accordion-item-content ' + this.state.activeThird}>
                                            <div class="item-content-container clearfix">
                                                <p>Lorem ipsum dolor sit amet.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
        )
    }
}
