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

                <form action="http://conceptoactual.com.ar/cpanel/image_up/recibir.php" method="POST" enctype="multipart/form-data">
                    <div className="add-product-form-file">
                      <input type="text" name="title" required/>
                      <input type="file" name="archivo" required/>
                      <input type="submit" value="Subir archivo" />
                    </div>
                </form>

                <form onSubmit={this.pushData}>
                    <div className="add-product-form-title">
                      Titulo:<input type='text' required onChange={this.onTitleChange} />
                    </div>
                    <div className="add-product-form-subtitle">
                      Subtitulo:<input type='text' required onChange={this.onSubtitleChange} />
                    </div>
                    <div className="add-product-form-description">
                      Descripcion: <input type='text' required onChange={this.onDescriptionChange} />
                    </div>
                    <div className="add-product-form-paragraph">
                      Cuerpo de noticia: <input type='text' required onChange={this.onParagraphChange} />
                    </div>
                    <div className="add-product-form-image">
                      Imagen principal: <input id="imagen" name="imagen" type="file" onChange={this.onImgChange}/>
                    </div>
                    <button type="submit">Crear</button>
                </form>

            </div>
        );
    },

    pushData: function (file) {
      console.log('aaa', file)
      debugger;
        storeProductApi({
            url: "http://conceptoactual.com.ar/cpanel/subir.php",
            method: "POST"
        }, file)
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
