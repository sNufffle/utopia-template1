import React, { Component } from 'react'
import SecondAccordion from '../layouts/secondAccordion'

export default class contactContent extends Component {
    render() {
        return (
            <section class="contact-content">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 contact-box">
                            <div class="col-md-6 contact-left">
                                <form action="#" class="become-an-author">
                                    <span class="form-title">
                                        Login
                            </span>
                                    <span class="form-info">
                                        Username
                            </span>
                                    <div class="form-validate">
                                        <input class="form-validate-input" id="contact-name" type="text" />
                                        <span class="input-effect"></span>
                                    </div>
                                    <span class="form-info">
                                        Password
                            </span>
                                    <div class="form-validate">
                                        <span class="form-show-hide">
                                            <i class="fa fa-eye"></i>
                                        </span>
                                        <input class="form-validate-input" id="contact-password" type="password" />
                                        <span class="input-effect"></span>
                                    </div>

                                    <div class="form-second-area">
                                        <div class="form-remember">
                                            <input id="formRemember" type="checkbox" />
                                            <label class="remember-label" for="formRemember">Remember me</label>
                                        </div>
                                        <div class="form-forget">
                                            <a href="#">Forgot Password?</a>
                                        </div>
                                        <div class="form-button">

                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="col-md-6 contact-right">
                                <p class="contact-thin">Work With Us!</p>
                                <h5 class="contact-title">Become an Author!</h5>
                                <div class="contact-description">
                                    <article class="text-left second-article">
                                       <SecondAccordion></SecondAccordion>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
