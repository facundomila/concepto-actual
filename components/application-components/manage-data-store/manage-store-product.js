var ProductList = require('components/common-components/product-list');
var ProductItem = require('components/common-components/product-item');
var React = require('react');

var ManageStoreProduct = React.createClass({

    render: function () {
        var ProductStore = this.props.children;

        return (
            <div className="manage-store-product">
                <div className="manage-store-product-head"></div>
                <ProductList key="index">
                    {ProductStore}
                </ProductList>
            </div>
        );
    }
});

module.exports = ManageStoreProduct;