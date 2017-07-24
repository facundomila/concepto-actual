var React = require('react');
var Button = require('components/core-components/button');

var NavigationStore = React.createClass({

    render: function () {
        console.log('props',this.props.action)
        return (
            <div className="navigation-store">
                {this.props.children}
                <Button buttonType="add" onClick={this.props.action} />
            </div>
        );
    }
});

module.exports = NavigationStore;