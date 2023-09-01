const express = require('express')
const app = express()
const port = 3000

const path = require('path')
const basePath = path.join(__dirname, 'templates')

app.get('/', (req, res)=>{
    res.sendFile(`${basePath}/index.html`)
})

// DEVE SER CRIADO DEPOIS DA ULTIMA ROTA 
// ISSO É UM MIDDLEWARE

app.use((req, res, next)=>{
    res.status(404).sendFile(`${basePath}/404.html`)
})

app.listen(port, ()=>{
    console.log(`http://localhost: ${port}`)
})