const express = require('express')
const app = express()
const port = 5000

const path = require('path')
const basePath = path.join(__dirname, 'templates')

//Arquivo Estaticos - > css, img, Videos, js
app.use(express.static('public'))

app.get('/', (req, res)=>{
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, ()=>{
    console.log(`http://localhost: ${port}`)
})