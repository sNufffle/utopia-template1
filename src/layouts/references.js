import React, { Component } from 'react'
import referenceImage from '../components/imgs/logo-black.png'

export default class references extends Component {
    render() {
        return (
            <section className="references">
                <div className="container">
                    <h3 className="references-title">References.</h3>
                    <div className="row">
                        <div className="col-md-3">
                            <figure>
                                <img className="references-img" src={referenceImage} alt="" />
                            </figure>
                        </div>

                        <div className="col-md-3">
                            <figure>
                                <img className="references-img" src={referenceImage} alt="" />
                            </figure>
                        </div>

                        <div className="col-md-3">
                            <figure>
                                <img className="references-img" src={referenceImage} alt="" />
                            </figure>
                        </div>

                        <div className="col-md-3">
                            <figure>
                                <img className="references-img" src={referenceImage} alt="" />
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
