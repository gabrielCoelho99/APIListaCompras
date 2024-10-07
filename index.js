const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let listaCompras = [];
let proxID = 1;

app.post('/items', (req,res)=>{
    const {nome, quantidade} = req.body;

    if(!nome){
        return res.status(400).json({error: 'O campo "nome" é obrigatório!'});
        })
    }
});