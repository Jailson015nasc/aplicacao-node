const { randomUUID } = require('crypto')
const { response } = require('express')
const express = require('express')
const { request } = require('http')
const router = express.Router()
const path = require('path')
const basepath = path.join(__dirname, '../templates')
const produtos = []

router.use(express.json())

router.get('/', (req, res) => {
    res.sendFile(`${basepath}/home.html`)
})

// router.get('/cadastrarProdutos', (req, res) => {
//     res.sendFile(`${basepath}/cadastrarProdutos.html`)
// })

router.get('/visuProdutos', (req, res) => {
    res.sendFile(`${basepath}/visuProdutos.html`)
})

router.put('/produtos', (req, res) => {
    const {id} = req.params
    const {name, age, dec} = request.body
    const produtoIndex = produtos.findIndex((produto) => produto.id == id)

    if(produtoIndex === -1){
        return res.statusCode(404).json({message: "Produto não encontrado"})
    }

    const produtoAtualizado = {
        id,
        name,
        age,
        dec
    }
    produtos[produtoIndex] = produtoAtualizado
    return res.json(produtoAtualizado)
})


// router.delete("/visuProdutos/id:", (req, res) =>{
//    const {id} = req.params

//    const produto = produtos.findIndex((produto) => produto.id === id)

//    produtos.splice(produto, 1)
   
//    return res.json({"message":"produto deletado com sucesso!"})
// })

// \z

// router.get('/cadastrarProdutos',(req,res)=>{
//     return res.json(produtos)
// })

module.exports = router



























































// const express = require('express')
// const app = express()
// const port = 3333
// const path = require('path')
// const basePath = path.join(__dirname, 'templates')


// app.use(express.json())

// app.use(express.urlencoded({
//     extended:true
// }))

// app.use(express.static('public'))

// app.get('/', (req, res) => {
//     res.sendFile(`${basePath}/home.html`)
// })

// app.get('/cadastrarProdutos', (req, res) => {
//     res.sendFile(`${basePath}/cadastrarProdutos.html`)
// })

// app.get('/visuProdutos', (req, res) => {
//     res.sendFile(`${basePath}/visuProdutos.html`)
// })

// app.post('/p', (req, res) => {
//     const { name, age, dec} = req.body
//     novoproduto.push({ nome:name,  preco:age, descricao:dec})
//     console.log(novoproduto)
//     res.json({ message: 'produto cadastrado com sucesso!' })
//     res.sendFile(`${basePath}/home.html`)
// })
// const novoproduto = []


// app.use((req, res, next)=>{
//     res.status(404).sendFile(`${basePath}/404.html`)
// })

// app.listen(port, ()=>{
//     console.log(`http://localhost: ${port}`)
// })
