const express = require('express')
const app = express()
const port = 3000

const path = require('path')
const basePath = path.join(__dirname, 'templates')

app.get('/',(req, res)=>{
//    res.send('Olá, angela!')  
      res.sendFile(`${basePath}/contato.html`)
})

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
    console.log(basePath)
})
