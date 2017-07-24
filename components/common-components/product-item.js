var React = require('react');
var StoreActionBar = require('components/application-components/manage-data-store/store-action-bar');

var ProductItem = React.createClass({

    render: function () {
        var products = this.props.children;

        return (
            <div className="product-item">
                {this.renderTitle(products)}
                {this.renderSubtitle(products)}
                {this.renderImg(products)}
                {this.renderActionBar(products)}
            </div>
        );
    },

    renderTitle: function (products) {
        return <div>{products.title}</div>;
    },

    renderSubtitle: function (products) {
        return <div>{products.subtitle}</div>;
    },

    renderImg: function (products) {
        return <div>
                    <img src={products.img} width="100px"/>
               </div>;
    },

    renderActionBar: function (products) {
        var productId = products.id;
        var productTitle = products.title;

        return <StoreActionBar id={productId} title={productTitle}/>
    }
});

module.exports = ProductItem;