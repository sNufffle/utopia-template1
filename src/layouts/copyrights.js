import React, { Component } from 'react'

export default class copyrights extends Component {
    render() {
        return (
            <div className="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 pl-5">
                            <p>Copyright &copy; 2021 by <a className="copyright-link" href="utopyatasarim.com">utopyatasarim </a>
                        All Right Reserved.</p>
                        </div>
                        <div className="col-sm-6 text-right pr-5">
                            <a className="social-link" href="#"><i className="fab fa-facebook-f"></i></a>
                            <a className="social-link" href="#"><i className="fab fa-twitter"></i></a>
                            <a className="social-link" href="#"><i className="fab fa-linkedin-in"></i></a>
                            <a className="social-link" href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
