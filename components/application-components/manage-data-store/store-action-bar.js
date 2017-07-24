var Button = require('components/core-components/button');
var React = require('react');
var ModalContainer = require('components/core-components/modal-container');
var storeProductApi = require('services/store-product/store-product-api');

var StoreActionBar = React.createClass({

    getInitialState: function () {
        return {
            showModal: false
        }
    },

    render: function () {
        return (
            <div className="store-action-bar">
                <Button buttonType="view" />
                <Button buttonType="edit" />
                <Button {...this.getDeleteButtonProps()} />
                <ModalContainer {...this.getModalContainerProps()}/>
            </div>
        );
    },

    getDeleteButtonProps: function () {
        var deleteProps = {
            buttonType: 'delete',
            onClick: this.handleDeleteButton
        };

        return deleteProps;
    },

    getModalContainerProps: function () {
        return {
            closeMe: this.closeModal,
            disable: this.state.showModal,
            confirm: this.deleteItem,
            title: this.props.title,
            id: this.props.id
        }
    },

    handleDeleteButton: function () {
        this.setState({
            showModal: true
        })
    },

    closeModal: function () {
        this.setState({
            showModal: false
        })
    },

    deleteItem: function () {
        var productId = this.props.id;

        storeProductApi({
            url: "http://localhost/concepto/api/news/delete.php",
            method: "POST"
        }, JSON.stringify({id: productId}));

        location.reload();
    }
});

module.exports = StoreActionBar;