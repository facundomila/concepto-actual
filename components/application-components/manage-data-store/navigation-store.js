var React = require('react');
var Button = require('components/core-components/button');

var NavigationStore = React.createClass({

    render: function () {
        return (
            <div className="navigation-store">
                {this.props.children}
                <Button buttonType="add" onClick={this.props.action} />
                <button className="navigation-store-logout">Cerrar Sesion</button>
            </div>
        );
    }
});

module.exports = NavigationStore;