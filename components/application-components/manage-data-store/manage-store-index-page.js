var $ = require('jquery');
var React = require('react');
var Header = require('components/core-components/header');
var NavigationStore = require('components/application-components/manage-data-store/navigation-store');
var AddProductForm = require('components/application-components/manage-data-store/add-product-form');
var ManageStoreProduct = require('components/application-components/manage-data-store/manage-store-product');
var storeProductApi = require('services/store-product/store-product-api');

var ManageStoreIndexPage = React.createClass({

    getInitialState: function() {
        return {
            products: '',
            loggedin: false,
            create: false
        };
    },

    componentWillMount: function () {
        var productsObj = storeProductApi({
            method: 'GET',
            url: 'http://conceptoactual.com.ar/api/news/read.php'
        });

        return this.setState({products: JSON.parse(productsObj)})
    },

    render: function () {
        return (
            <div className="manage-store">
                {this.renderManageStore()}
            </div>
        );
    },

    renderManageStore: function () {
        var ProductStore = this.state.products.records;

        var manageStoreLayout = null;

        if (this.state.loggedin) {
            manageStoreLayout = (
                <div>
                    <Header className="header">
                        <NavigationStore action={this.showCreateForm} />
                    </Header>
                    <div className="manage-store-main">
                        {this.renderCreateNews()}
                        <ManageStoreProduct>{ProductStore}</ManageStoreProduct>
                    </div>
                </div>
            );
        }

        return manageStoreLayout;
    },

    showCreateForm: function () {
        this.setState({create: true})
    },

    renderCreateNews: function () {
        var newsForm = null;

        if (this.state.create) {
            newsForm = (
                <AddProductForm>form</AddProductForm>);
        }

        return newsForm;
    }
});

module.exports = ManageStoreIndexPage;
