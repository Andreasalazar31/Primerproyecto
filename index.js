'use strict';

import mongoose from 'mongoose'
import app from './app.js'
const port = 4000;
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/portafolio')
.then (() => {
    console.log('conexion a la base de datos exitosa'
    );
    app.listen(port , () => {
        console.log('servidor funciona correctamente');
    })

})
.catch (err => console.log(err.message));

