var React = require('react');
var Header = require('components/core-components/header');
var NavigationBar = require('components/core-components/navigation-bar');
var AddProductForm = require('components/application-components/manage-data-store/add-product-form');
var ManageStoreProduct = require('components/application-components/manage-data-store/manage-store-product');
var storeProductApi = require('services/store-product/store-product-api');
var LoginStore = require('components/application-components/manage-data-store/login-store');

var ManageStoreIndexPage = React.createClass({

    getInitialState: function() {
        return {
            products: '',
            login: false
        };
    },

    componentWillMount: function () {
        var productsObj = storeProductApi({
            method: 'GET',
            url: 'http://localhost/my-profile/api/product/read.php'
        });

        return this.setState({products: JSON.parse(productsObj)})
    },

    render: function () {

        console.log('login', this.state.login)
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
                        <NavigationBar>Navigation</NavigationBar>
                    </Header>
                    <AddProductForm>form</AddProductForm>
                    <ManageStoreProduct>{ProductStore}</ManageStoreProduct>
                </div>
            );
        }

        return manageStoreLayout;
    }
});

module.exports = ManageStoreIndexPage;
