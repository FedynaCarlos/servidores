const main = {
	crearProducto: function(req, res) {
		res.send('creando producto');
	},
	borrarProducto: function(req, res) {
		res.send('borrando producto');
	},
	editarProducto: function(req, res) {
		res.send('editando producto');
	}
};

module.exports = main;
