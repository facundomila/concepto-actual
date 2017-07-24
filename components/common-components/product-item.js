var React = require('react');
var StoreActionBar = require('components/application-components/manage-data-store/store-action-bar');

var ProductItem = React.createClass({

    render: function () {
        var products = this.props.children;

        return (
            <div className="product-item">
                {this.renderName(products)}
                {this.renderDescription(products)}
                {this.renderPrice(products)}
                {this.renderActionBar(products)}
            </div>
        );
    },

    renderName: function (products) {
        return <div>{products.name}</div>;
    },

    renderDescription: function (products) {
        return <div>{products.description}</div>;
    },

    renderPrice: function (products) {
        return <div>{products.price}</div>;
    },

    renderActionBar: function (products) {
        var productId = products.id;
        var productName = products.name;

        return <StoreActionBar id={productId} name={productName}/>
    }
});

module.exports = ProductItem;