const express = require('express');
const app = express();

let path = require('path')

app.set('views',path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname,'public')))

const home = require('./routers/min')
;
app.use('/',home)

app.listen(3000, ()=>{
    console.log('Servidor funcionando');
    });