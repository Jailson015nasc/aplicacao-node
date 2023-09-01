const { Console } = require('console')
const express = require('express')
const router = express.Router()
const path = require('path')
const basepath = path.join(__dirname, '../views')
const produtos = []

router.use(express.json())

router.get('/', (req, res) => {
    res.sendFile(`${basepath}/home.handlebars`)
})

 router.get('/bb', (req, res) => {
    res.sendFile(`${basepath}/cadastrarPosts.handlebars`)
})

router.post('/b', (req, res) => {
    const {id} = req.params
    const {name, like, comments} = req.body

    const postAtualizado = {
        id,
        name,
        like,
        comments
    }
    console.log('postAtualizado')
    return res.json(postAtualizado)
})

// router.get('/cadastrarPosts',(req,res)=>{
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
