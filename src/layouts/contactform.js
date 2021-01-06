import React, { Component } from 'react'

export default class contactform extends Component {
    render() {
        return (
            <section class="contact-form-wrapper">
            <div class="container">
                <div class="row">
                    <h3 class="references-title">CONTACT US.</h3>
                    <div class="col-md-6">
                        <h2 class="contact-title">Our robots<br />not working?</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, fugiat eaque? Tenetur,
                            recusandae ducimus? Cupiditate.
    
                        </p>
                        <br />
                        <div class="col-sm-6 text-right pr-5">
                            <a className="social-link" href="#"><i className="fab fa-facebook-f"></i></a>
                            <a className="social-link" href="#"><i className="fab fa-twitter"></i></a>
                            <a className="social-link" href="#"><i className="fab fa-linkedin-in"></i></a>
                            <a className="social-link" href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <form action="#" class="contact-form">
                            <p>
                                <input type="text" name="contact_Sec_Name" id="contact_Sec_Name" placeholder="Name" />
                            </p>
                            <p>
                                <input type="email" name="contact_Sec_Mail" id="contact_Sec_Mail" placeholder="Email" />
                            </p>
                            <p>
                                <input type="text" name="contact_Sec_Subject" id="contact_Sec_Subject"
                                    placeholder="Subject" />
                            </p>
                            <p>
                                <textarea name="contact_Sec_Message" id="contact_Sec_Message" cols="30" rows="10"
                                    placeholder="Message"></textarea>
                            </p>
                            <p class="contact-form-submit text-right">
                                <input class="btn-1 outline" type="submit" id="contact_Sec_Submit" value="SEND" />
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}
