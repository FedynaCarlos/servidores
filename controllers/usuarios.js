const main = {
	crearUsuario: function(req, res) {
		res.send('creando usuario');
	},
	borrarUsuario: function(req, res) {
		res.send('borrando usuario');
	},
	editarUsuario: function(req, res) {
		res.send('editando usuario');
	}
};
module.exports = main;
//esta es una forma de hacer las funciones y exportarlas
/*const crearUsuario = function(req, res) {
	res.send('creando usuario');
};
const borrarUsuario = function(req, res) {
	res.send('borrando usuario');
};
const editarUsuario = function(req, res) {
	res.send('editando usuario');
};

module.exports = {
	crearUsuario,
	borrarUsuario,
	editarUsuario
};
*/
