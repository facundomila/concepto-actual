var _ = require('lodash');
var React = require('react');
var storeProductApi = require('services/store-product/store-product-api');

var IndexPage = React.createClass({

    getInitialState: function() {
        return {
            products: ''
        };
    },

    componentWillMount: function() {
        var productsObj = storeProductApi({
            method: 'GET',
            url: 'http://localhost/my-profile/api/product/read.php'
        });
        this.setState({products: JSON.parse(productsObj)})
    },

    render: function () {
        var products = this.state.products.records;
        return (
            <div className="index-page">
                {products[1].name}
            </div>
        );
    }
});

module.exports = IndexPage;