var React = require('react');
var Header = require('components/core-components/header');
var NavigationStore = require('components/application-components/manage-data-store/navigation-store');
var AddProductForm = require('components/application-components/manage-data-store/add-product-form');
var ManageStoreProduct = require('components/application-components/manage-data-store/manage-store-product');
var storeProductApi = require('services/store-product/store-product-api');
var LoginStore = require('components/application-components/manage-data-store/login-store');

var ManageStoreIndexPage = React.createClass({

    getInitialState: function() {
        return {
            products: '',
            login: true,
            create: false
        };
    },

    componentWillMount: function () {
        var productsObj = storeProductApi({
            method: 'GET',
            url: 'http://localhost/concepto/api/news/read.php'
        });

        return this.setState({products: JSON.parse(productsObj)})
    },

    render: function () {
        return (
            <div className="manage-store">
                <LoginStore login={this.loginStore}/>
                {this.renderManageStore()}
            </div>
        );
    },

    loginStore: function () {
      this.setState({login: true})
    },

    renderManageStore: function () {
        var ProductStore = this.state.products.records;

        var manageStoreLayout = null;

        if (this.state.login) {
            manageStoreLayout = (
                <div>
                    <Header className="header">LOGOOOO
                        <NavigationStore action={this.showCreateForm} >Navigation</NavigationStore>
                    </Header>
                    {this.renderCreateNews()}
                    <ManageStoreProduct>{ProductStore}</ManageStoreProduct>
                </div>
            );
        }

        return manageStoreLayout;
    },

    showCreateForm: function () {
        this.setState({create: true})
    },

    renderCreateNews: function () {
        console.log('stateeee',this.state.create);
        var newsForm = null;

        if (this.state.create) {
            newsForm = (<AddProductForm>form</AddProductForm>);
        }

        return newsForm;
    }
});

module.exports = ManageStoreIndexPage;
