var React = require('react');
var Footer = require('components/core-components/footer');
var Header = require('components/core-components/header');
var NewsGrid = require('components/common-components/news-grid');

var DemoPage = React.createClass({

    render: function () {
        return (
            <div className="demo-page">
              <Header />
              <div className="demo-page-main">
                <NewsGrid>
                </NewsGrid>
              </div>
              <Footer />
            </div>
        );
    }
});

module.exports = DemoPage;
