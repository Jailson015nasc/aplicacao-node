const express = require('express')
const app = express()
const port = 3333

const path = require('path')
const basePath = path.join(__dirname,'templates')

app.get('/produto/:id', (req, res)=>{
    const id = req.params.id
    //Fazer a leitura da tabela produto e resgatar um produto dessa tabela
    console.log(`Estamos buscando o produto:${id}`)

    res.sendFile(`${basePath}/produto.html`)
})

app.get('/', (req, res)=>{
    //  res.send('Olá, Mundo!')
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, ()=>{
    console.log(`http://localhost: ${port}`)
})



