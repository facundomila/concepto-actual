var React = require('react');

var NavigationBar = React.createClass({

    render: function () {
        return (
            <div className="navigation-bar">
              <nav>
                <a href="#" className="navigation-bar-links">General</a> |
                <a href="#" className="navigation-bar-links">Deportes</a> |
                <a href="#" className="navigation-bar-links">Espectaculo</a> |
                <a href="#" className="navigation-bar-links">Economia</a> |
                <a href="#" className="navigation-bar-links">Tecnologia</a> |
                <a href="#" className="navigation-bar-links">Turismo</a> 
              </nav>
            </div>
        );
    }
});

module.exports = NavigationBar;
