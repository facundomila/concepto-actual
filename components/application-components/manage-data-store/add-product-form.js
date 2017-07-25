var React = require('react');
var storeProductApi = require('services/store-product/store-product-api');

var AddProductForm = React.createClass ({

    getInitialState: function () {
        return {
            title: '',
            subtitle: '',
            description: '',
            paragraph: '',
            img: '',
            epigraph: '',
            category_id: 0
        };
    },

    render: function () {
        return (
            <div className="add-product-form">

                <form action="api/news/file.php" method="post" enctype="multipart/form-data">
                    <input type="file" name="Buscar imagen" id="archivo" />
                    <input type="submit" value="Subir archivo" />
                </form>
                <form onSubmit={this.pushData}>
                    <span>Titulo:</span><input type='text' required onChange={this.onTitleChange} />
                    <span>Subtitulo:</span><input type='text' required onChange={this.onSubtitleChange} />
                    <input type='text' required onChange={this.onDescriptionChange} />
                    <input type='text' required onChange={this.onParagraphChange} />
                    <input id="imagen" name="imagen" type="file" onChange={this.onImgChange}/>
                    <button type="submit">Crear</button>
                </form>

            </div>
        );
    },

    onTitleChange: function(e) {
        this.setState({title: e.target.value});
    },

    onSubtitleChange: function(e) {
        this.setState({subtitle: e.target.value});
    },

    onDescriptionChange: function(e) {
        this.setState({description: e.target.value});
    },

    onParagraphChange: function(e) {
        this.setState({paragraph: e.target.value});
    },

    onImgChange: function (e) {
        this.setState({img: e.target.value})
    },

    pushData: function () {
        var newProduct = this.state;

        storeProductApi({
            url: "http://conceptoactual.com.ar/api/news/create.php",
            method: "POST"
        }, JSON.stringify(newProduct))
    },

    postImg: function () {
        var file = this.state;

        storeProductApi({
            url: "http://conceptoactual.com.ar/api/news/images.php",
            method: "POST"
        }, file)
    }

});

module.exports = AddProductForm;
