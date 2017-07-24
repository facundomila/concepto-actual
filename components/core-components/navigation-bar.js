var React = require('react');

var NavigationBar = React.createClass({

    render: function () {
        return (
            <div className="navigation-bar">
                {this.props.children}
            </div>
        );
    }
});

module.exports = NavigationBar;