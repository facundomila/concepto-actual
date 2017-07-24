var ProductList = require('components/common-components/product-list');
var React = require('react');

var ManageStoreProduct = React.createClass({

    render: function () {
        var ProductStore = this.props.children;

        return (
            <div className="manage-store-product">
                <ProductList key="index">
                    {ProductStore}
                </ProductList>
            </div>
        );
    }
});

module.exports = ManageStoreProduct;