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
        }

            const novoItem = {
                id: proxID++,
                nome,
                quantidade: quantidade || 1,
            };

                listaCompras.push(novoItem);
                res.status(201).json(novoItem);
});

app.get('/items', (req, res)=>{
    res.json(listaCompras);
});

app.delete('/items/:id', (req, res)=> {
    const {id} = req.params;

    const itemIndex = listaCompras.findIndex(item => item.id === parseInt(id));

    if (itemIndex === -1) {
        return res.status(404).json({error: 'Item não encontrado!'});
    };

    const deletedItem = listaCompras.splice(itemIndex, 1);
    res.json(deletedItem[0]);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});