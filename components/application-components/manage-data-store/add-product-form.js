var React = require('react');
var storeProductApi = require('services/store-product/store-product-api');

var AddProductForm = React.createClass ({

    getInitialState: function () {
        return {
            name: '',
            description: '',
            price: '',
            category_id: 0
        };
    },

    render: function () {
        return (
            <div className="add-product-form">
                <form onSubmit={this.pushData}>
                    <input type='text' required onChange={this.onNameChange} />
                    <input type='text' required onChange={this.onDescriptionChange} />
                    <input type='text' placeholder="pone el precio" required onChange={this.onPriceChange} />
                    <button type="submit">Crear</button>
                </form>
            </div>
        );
    },

    onNameChange: function(e) {
        this.setState({name: e.target.value});
    },

    onDescriptionChange: function(e) {
        this.setState({description: e.target.value});
    },

    onPriceChange: function(e) {
        this.setState({price: e.target.value});
    },

    pushData: function (event) {
        var newProduct = this.state;

        storeProductApi({
            url: "http://localhost/concepto-actual/api/news/create.php",
            method: "POST"
        }, JSON.stringify(newProduct))
    }

});

module.exports = AddProductForm;
