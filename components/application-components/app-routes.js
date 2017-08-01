var DemoPage = require('components/application-components/demo/demo-page');
var IndexPage = require('components/application-components/index-page');
var React = require('react');
var ManageStore = require('components/application-components/manage-data-store/manage-store-index-page');
var LoginStore = require('components/application-components/manage-data-store/login-store');

var ReactRouter = require('react-router');
var browserHistory = ReactRouter.browserHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Route = ReactRouter.Route;
var Router = ReactRouter.Router;

var appRoutes = (
    <Router history={browserHistory}>
        <Route path="/" component={IndexPage} />
        <Route path="/index.html" component={IndexPage} />
        <Route path="/demo.html" component={DemoPage} />
        <Route path="/store.html" component={ManageStore} />
        <Route path="/login.html" component={LoginStore} />
    </Router>
);

module.exports = appRoutes;
