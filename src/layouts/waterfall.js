import React, { Component } from 'react'

export default class waterfall extends Component {
    render() {
        return (
            <section className="waterfall">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="waterfall-numbers">
                                <span>8585</span>
                            </div>
                            <div className="waterfall-string">
                                Teplates
                        </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="waterfall-numbers">
                                <span>980</span>
                            </div>
                            <div className="waterfall-string">
                                Active Users
                        </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="waterfall-numbers">
                                <span>98520</span>
                            </div>
                            <div className="waterfall-string">
                                Products
                        </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="waterfall-numbers">
                                <span>20</span>
                            </div>
                            <div className="waterfall-string">
                                Countries
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

//WATERFALL COUNTER

// console.log(Bestsellers.this.props.waterfallHover());


// window.onscroll = function () {
//    waterfallAppear()
// };

//   function waterfallAppear() {
//     if (window.pageYOffset > 430) {
//         $('.waterfall-numbers').each(function () {
//             $(this).prop('Counter', 0).animate({
//                 Counter: $(this).text()
//             }, {
//                 duration: 4000,
//                 easing: 'swing',
//                 step: function (now) {
//                     $(this).text(Math.ceil(now));
//                 }
//             });
//         });
//     }
// };

//WATERFALL COUNTER
