const { Router } = require('express');
const router = Router();
const mongoose = require('mongoose')
const esq = mongoose.Schema

const esqheroe  = new esq({
  name: String,
  rol: String,
  perks: Number, 
  ulti: String,
  id: String
})
router.post('/agregar',(req, res)=>{
    console.log("estas en agregar")
    const nuevo = new esqheroe({
        name: req.body.nombre,
        rol: req.body.rol,
        perks:req.body.perks,
        ulti:req.body.ulti,
        id:req.body.id
    })
    nuevo.save(function(err){
        if(!err){
            res.send("Añadido")
        }else{
            res.send(err)
        }
    })
})
const mode = mongoose.model('heroes', esqheroe)

router.get('/ejemplo', (req,res)=>{
    res.end('saludos a tu puta madre')
})/*
router.get('/', (req,res)=>{
    db.ref('heroes').once('value', (snapshot)=>{
        const base = snapshot.val()
        res.render('index',{heroes: base})
    }) 
})
//añadir
router.post('/new', (req, res)=>{
console.log(req.body)

const newHero={
    nombre:req.body.nombre,
    rol:req.body.rol,
    habilidades:req.body.perks,
    ultimate: req.body.ulti 
}
if(newHero.nombre ==""){
res.redirect('/')
}else{
    db.ref('heroes').push(newHero)
    res.redirect('/')
}
})
//borrar
router.get('/borrar/:id', (req, res)=>{
    db.ref('heroes/'+req.params.id).remove();
    res.redirect('/')
    console.log("borrado")
})
*/
module.exports = router;