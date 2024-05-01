import express from 'express'
import Jimp from 'jimp';
import axios from 'axios'
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

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

// Se especifica al motor que reconozca la extensión handlebars
app.set("view engine", "handlebars");

// Creamos el routing
app.get('/', (req,res) => {
    res.render('home', {
        layouts:'main',
        title:'Estamos en el Home'
    })
})

app.post('/upload', (req,res) => {

    console.log('req.body-->', req.body )
    const { url } = req.body
    
    const nombre = `${uuidv4().slice(0,6)}.jpg`
    console.log(nombre)
    const encode = (data) => {
        let buf = Buffer.from(data);
        let base64 = buf.toString('base64');
        return base64
    }

    Jimp.read(url)
    .then(imagen => {
        return imagen
            .resize(350, Jimp.AUTO) // Cambiado a 350px de ancho
            .greyscale()
            .writeAsync(`./images/${nombre}`);
    })
    .then(() => {
        fs.readFile(`./images/${nombre}`, (err, Imagen) => {
            if(err) {
                console.error('Error al leer el archivo:', err);
                return;
            }
            res.send(`<img class="img-fluid" src='data:image/jpeg;base64,${encode(Imagen)}' />
                <p>La ${nombre} se ha procesado correctamente!! </p>
            `)
        })
    })
    .catch(err => {
        console.error(err);
        res.status(500).send('Hubo un error al procesar la imagen');
    });
})