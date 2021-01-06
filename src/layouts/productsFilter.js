import React, { Component } from 'react'

export default class productsFilter extends Component {
    render() {
        return (
            <div class="row">
                <div class="col-md-6 product-top-filters text-uppercase">
                    <h4>Web Templates</h4>
                </div>

                <div class="col-md-4 product-top-filters">
                    <span class="result-filter">SHOWING <b>26</b> OF <b>850</b> RESULTS</span>
                    <div class="dropdown-option">
                        <select class="dropdown-select" name="product-quality" id="product-quality">
                            <option class="option-d" value="bestSellers">Most Popular</option>
                            <option value="lowToHigh">Low to High</option>
                            <option value="highToLow">High to Low</option>
                            <option value="newArrivals">New Arrivals</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}
