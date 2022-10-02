let express = require('express');
const main = require('./controllers/usuarios');
const app = express();
const port = 3001;
const rutasUsuarios = require('./routes/index');
const rutasProductos = require('./routes/productos');

app.use('/usuarios', rutasUsuarios);
app.use('/productos', rutasProductos);

app.listen(port, () => {
	console.log('servidor corriendo en el puerto' + port);
});
