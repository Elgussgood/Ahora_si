const express = require('express')
const app = express()
const cors = require('cors')
app.set('port', process.env.PORT||9999)
app.listen(app.get('port'), ()=>{
    console.log("Server en:" ,app.get('port'))
})
app.use(cors())
const ruta = require('./routes/rutas')
app.use('/',ruta)
const bodyP= require('body-parser')
app.use(bodyP.json())
app.use(bodyP.urlencoded({extended:'true'}))
const arcBD=require('./conexion')