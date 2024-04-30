import express from 'express'
import { create } from 'express-handlebars';

//Creación variables de entorno
import { fileURLToPath } from 'url'
import { dirname } from "path";
// Variables que me permiten mostrar el path donde estoy en el proyecto
const __filename = fileURLToPath( import.meta.url )
const __dirname = dirname( __filename )

const app = express();
const port = 3000;


app.listen(port, () => {
    console.log(`Servidor levantado en el puerto ${port}`);
});

//middleware

app.use(express.static('public'));
app.use('/css', express.static(`${__dirname}/../public/assets/css`));
app.use('/bootstrap', express.static( `${__dirname}/../node_modules/bootstrap/dist/css`));

// Configurar handlebars
const hbs = create({
    // Utilizar varios directorios o parciales.
	partialsDir: [
		"views"
	]
});

// Configurar el motor de plantilla, para esto debemos usar el método “engine”,
// el cual define el motor de plantillas que utilizaremos en nuestro servidor con Express.
app.engine("handlebars", hbs.engine);

// Se especifica al motor que reconozca la extensión handlebars
app.set("view engine", "handlebars");
// app.set("views", path.resolve(__dirname, "./views"));


// Creamos el routing
app.get('/', (req,res) => {
    res.render('home', {
        layouts:'main',
        title:'Estamos en el Home'
    })
})