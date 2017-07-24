var React = require('react');
var IconPlus = require('react-icons/lib/fa/plus');
var IconEdit = require('react-icons/lib/fa/edit');
var IconView = require('react-icons/lib/fa/eye');
var IconDelete = require('react-icons/lib/fa/trash');

var Icon = React.createClass({

    render: function () {
        return (
            <span className="icon">
                {this.getIcon()}
            </span>
        );
    },

    getIcon: function () {
        var icons = {
            add: <IconPlus />,
            edit: <IconEdit />,
            view: <IconView />,
            delete: <IconDelete />
        };

        return icons[this.props.type];
    }
});

module.exports = Icon;