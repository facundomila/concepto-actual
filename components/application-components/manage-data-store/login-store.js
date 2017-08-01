var React = require('react');

var LoginStore = React.createClass({

    render: function () {
        return (
            <div className="login-store">
                <p>Ingrese nombre de usuario y contraseña</p>
                <form method="POST" action="http://localhost/concepto-actual/api/login/validar.php">
			             <input type="text" name="nnombre" placeholder="Usuario" />
			             <input type="password" name="npassword" placeholder="Contraseña" />
			             <button type="submit">Iniciar Sesion</button>
		            </form>
            </div>
        );
    }
});

module.exports = LoginStore;
