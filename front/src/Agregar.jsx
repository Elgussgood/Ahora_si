import React from "react";
import { useState } from "react";
import uniqid from "uniqid";
import axios from 'axios';

function Agregar(){
    const [nombre, setnombre]=useState('')
    const [rol, setrol]=useState('')
    const [perks, setperks]=useState('')
    const [ulti, setulti]=useState('')
    function add(){
        var heroe={
            nombre: nombre,
            rol: rol,
            perks:perks,
            ulti:ulti,
            id: uniqid()
        }
        var heroJ = JSON.stringify(heroe);
        console.log(heroe)
        fetch("http://localhost:9999/agregar",{
            body:heroe,
            method:'post'
        })
        axios.post('http://localhost:9999/agregar',heroe)
        
        .then(res =>{
            alert(res.data)
        })
        .then(err =>{
            console.log(err)
        })
    }
    return(
        <div>
            <h2>Agregar un nuevo Héroe</h2>
            <div class="card-footer">
                <form action="http://localhost:9999/agregar" method="post">
                <div className="form-group">
                    <input type="text" name="nombre" placeholder="Nombre de héroe" className="form-control" id="nombre" value={nombre} onChange={(e)=>{setnombre(e.target.value)}}/>
                </div>
                <div className="form-group">
                    <input type="text" name="rol" placeholder="Rol de héroe " className="form-control" id="rol" value={rol} onChange={(e)=>{setrol(e.target.value)}}/>
                </div>
                <div className="form-group">
                    <input type="number" name="perks" placeholder="Numero de habilidades" className="form-control" id="num" value={perks} onChange={(e)=>{setperks(e.target.value)}}/>
                </div>
                <div className="form-group">
                    <input type="text" name="ulti" placeholder="Ultimate" className="form-control" id="ulti" value={ulti} onChange={(e)=>{setulti(e.target.value)}}/>
                </div>
                <button type="submit" className="btn btn-primary btn-block" id="enviar" onClick={add}>Agregar</button>
                </form>
        </div>        
                        <div id="error" >Mete valores correctos</div>

        </div>
    )
}
export default Agregar;