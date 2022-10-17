const mongoose= require('mongoose')
mongoose.connect('mongodb://localhost:27017/CRUD')

const bd = mongoose.connection

bd.on('connected', ()=>{
    console.log("conexion con BD")
})
bd.on('error', ()=>{
    console.log("error")
})

module.exports=mongoose