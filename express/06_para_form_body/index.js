const express = require('express')
const app = express()
const port = 3333
const path = require('path')
const basePath = path.join(__dirname, 'templates')

app.use(express.urlencoded({ //montar um ob. json
    extended:true
})) 
app.use(express.json())

//ROTA PARA MOSTRAR O FORMULARIO
app.get('/user/add', (req, res)=>{
     res.sendFile(`${basePath}/userForm.html`)
})


//ROTA PARA CADASTRADAS AS INFO. DO FORMULARIO
app.post('/user/save', (req, res) =>{
    const {name, age} = req.body
    console.log(`Nome:${name} e idade:${age}`)
    res.sendFile(`${basePath}/userForm.html`)

//    const name = req.body
//    const age = req.body
})


app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})
