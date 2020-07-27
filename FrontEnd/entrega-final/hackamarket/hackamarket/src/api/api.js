// COSAS QUE HE INSTALADO
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();

// COSAS QUE USA LA APP
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// DATOS DE CONEXIÓN A LA BBDD
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'carlos',
    password: '123456',
    database: 'market'
});

// HACIENDO CONEXIÓN A LA BBDD
connection.connect(error => {
    if (error) throw error;
    console.log('Database chachi 😜')
})

// PUERTO DE CONEXIÓN DEL SERVICIO
const PORT = 3090;

// CONEXIÓN DEL SERVICIO
app.listen(PORT, () => console.log('API chachi 😜'));

// LISTAR LOS PRODUCTOS

// AÑADIR PRODUCTOS (OPCIONAL)

// EDITAR PRODUCTOS (OPCIONAL)

// BORRAR PRODUCTOS (OPCIONAL)

// LISTADO DE CLIENTES
app.get('/clientes', (req, res) => {

    // SECUENCIA SQL
    const sql = 'SELECT * FROM listaclientes';

    // CONEXIÓN A LA BBDD
    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        } else {
            console.log('No hay clientes que monstrar. Unlucky life!! 😖')
        }
    })

})

// AÑADIR CLIENTE
app.post('/clientes/add', (req, res) => {

    // SECUENCIA SQL
    const sql = 'INSERT INTO listaclientes SET ?';

    // OBJETO DE DATOS DEL NUEVO CLIENTE
    const nuevoCliente = {
        nombre: req.body.nombre,
        usuario: req.body.usuario,
        password: req.body.password,
        email: req.body.email,
        foto: req.body.foto
    };

    //CONEXIÓN A LA BASE DE DATOS
    connection.query(sql, nuevoCliente, error => {
        if (error) throw error;
        console.log('Cliente creado con éxito. 🥳')
    });

})

// EDITAR CLIENTE
app.put('/clientes/update/:id', (req, res) => {

    // DATOS QUE RECIBIMOS DE LA VISTA
    const id = req.params.id;
    const nombre = req.body.nombre;
    const usuario = req.body.usuario;
    const password = req.body.password;
    const email = req.body.email;
    const foto = req.body.foto;

    // SECUENCIA SQL
    const sql = `
    UPDATE listaclientes
    SET nombre='${nombre}', usuario='${usuario}', password='${password}', email='${email}', foto='${foto}'
    WHERE id=${id}
    `

    // CONEXIÓN A LA BBDD
    connection.query(sql, error => {
        if (error) throw error;
        console.log('Cliente actualizado con éxito 🥳')
    });
})

// BORRAR CLIENTE