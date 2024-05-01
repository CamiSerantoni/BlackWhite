import express from 'express'
import Jimp from 'jimp';
// import axios from 'axios'
// import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
import exphbs from 'express-handlebars';
import { create } from 'express-handlebars';

//Creación variables de entorno
import { fileURLToPath } from 'url'
import path, { dirname } from "path";
// Variables que me permiten mostrar el path donde estoy en el proyecto
const __filename = fileURLToPath( import.meta.url )
const __dirname = dirname( __filename )

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Servidor levantado en el puerto ${port}`);
});

//middleware
app.use(express.json());
app.use(express.static('public'));
app.use('/css', express.static(`${__dirname}/../public/css`));
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/axios', express.static(`${__dirname}/../node_modules/axios/dist`));
app.use('/js', express.static( `${__dirname}/../public/js`));

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
const handlebars = exphbs.create({
    defaultLayout: __dirname + "/views/layout/main.handlebars",
    layoutsDir: __dirname + "/views",
    partialsDir: __dirname + "/views"
})
// Se especifica al motor que reconozca la extensión handlebars
app.set("view engine", "handlebars");




// Creamos el routing
app.get('/', (req,res) => {
    res.render('home', {
        layouts:'main',
        title:'Estamos en el Home'
    })
})

app.get("/cargar", async (req, res) => {
    const {imagen} = req.query
    const nombreImagen = `${uuidv4().slice(30)}.jpeg`
    console.log(nombreImagen)
    const IMG = await Jimp.read(imagen)
    await IMG
    .resize(350, Jimp.AUTO)
    .greyscale()
    .writeAsync(__dirname + "/public/img/" + nombreImagen)
    res.sendFile(__dirname + "/public/img/" + nombreImagen)
})