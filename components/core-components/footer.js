var React = require('react');
var Link = require('components/core-components/link');
var NavigationBar = require('components/core-components/navigation-bar')

var Footer = React.createClass({

    render: function () {
        return (
            <div className="footer">
                <img className="header-logo" src="images/iso_blanco.png" />
                <Link linkType="facebook"/>
                <Link linkType="whatsapp"/>
                <Link linkType="twitter"/>
                <Link linkType="linkedin"/>
                <div className="header-navigation">
                  <NavigationBar />
                </div>
            </div>
        );
    }
});

module.exports = Footer;
