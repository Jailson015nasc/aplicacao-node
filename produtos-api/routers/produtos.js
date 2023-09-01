const { randomUUID } = require('crypto')
const express = require('express')
const connection = require('../database/connection')
const router = express.Router()
router.use(express.json())

router.post('/anp', (req, res) =>{
    const {nome, preco, descricao} = req.body
    const sql = `INSERT INTO produto(nome, preco, descricao) values ('${nome}', '${preco}', '${descricao}')`

   connection.query(sql, (err) =>{
       if(err){
           console.log(err)
           return
          }
          return res.json(sql)
   })
})

const produtos = []

router.post("/cadastrar", (req, res) => {
    const { nome, preco, descricao } = req.body

    const produto = {
        id: randomUUID(),
        nome, 
        preco,
        descricao
    }

    produtos.push(produto)
    return res.json(produtos)
})

router.get("/cadastrar", (req, res) => {
    return res.json(produtos)
})

router.delete("/produtos/:id", (request, response) => {
    const { id } = request.params

    const produto = produtos.findIndex((produto) => produto.id === id);

    produtos.splice(produto, 1);

    return response.json({"message": "Produto deletado com sucesso"});
});

router.put("/produtos/:id", (request, response) => {
    const { id } = request.params;
    const { nome, preco, descricao } = request.body;

    const produtoIndex = produtos.findIndex((produto) => produto.id === id);

    if (produtoIndex === -1) {
        return response.status(404).json({ message: "Produto não encontrado" });
    }

    const produtoAtualizado = {
        id,
        nome,
        preco,
        descricao
    };

    produtos[produtoIndex] = produtoAtualizado;

    return response.json(produtoAtualizado);
});


module.exports = router