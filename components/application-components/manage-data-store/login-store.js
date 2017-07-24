var React = require('react');

var LoginStore = React.createClass({

    getInitialState: function() {
        return {
            validated: false,
            user: '',
            pass: ''
        };
    },

    render: function () {
        return (
            <div className="login-store">
                <p>login form</p>
                <form>
                  <input type="text" required onChange={this.onUserChange}/>
                  <input type="text" required onChange={this.onPassChange}/>
                  <button onClick={this.validateUsers}>Login</button>
                </form>
            </div>
        );
    },

    onUserChange: function (event) {
        this.setState({user: event.target.value})
    },

    onPassChange: function (event) {
        this.setState({pass: event.target.value})
    },

    validateUsers: function (event) {
      var user = this.state.user;
      var pass = this.state.pass;

      if (user === 'gaston.admin' && pass === 'concepto123') {
          console.log('validado');
          this.setState({validated: true});
          this.props.login()
      } else if (user === 'nicolas.admin' && pass === 'concepto123') {
          console.log('validado');
          this.setState({validated: true});
          this.props.login()
      } else {
        alert('Los datos ingresados son incorrectos');
      }

      event.preventDefault();
    }
});

module.exports = LoginStore;
