const express = require('express')
const app = express()
const port = 3000

// get = fazendo uma busca
app.get('/',(req, res)=>{
   res.send('Olá, Mundo!')  //send = enviar
})

// get - /clientes -> console = "Página Cliente"
app.get('/clientes', (req, res)=>{
    res.send('Página cliente!')
})

app.listen(port, () =>{
    console.log(`http://localhost:${port}`)
})

// post = fazendo cadastro