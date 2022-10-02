let express = require('express');
//const path = require('path');
const app = express();

/*const publicFolderPath = path.resolve(__dirname, './public');
app.use(express.static(publicFolderPath));

app.listen(3030, () => {
	console.log('senvidor corriendo en el puerto 3030');
});
app.get('/', (req, res) => {
	//let htmlpath = path.resolve(__dirname, './views/index.html');
	res.sendFile(path.resolve(__dirname, './views/home.html'));
});
*/
const port = 3000;
app.get('/:var1/:var2/:var3/:v', function(req, res) {
	console.log(reg.params.var1);
	console.log(reg.params.var2);
	console.log(reg.params.var3);
	res.send('Hola mundo');
});
app.listen(port, () => {
	console.log('servidor corriendo en el puerto' + port);
});
