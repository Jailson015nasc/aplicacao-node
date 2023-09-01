const express = require('express')
const app = express()
const port = 3300

const path = require('path')
const basePath = path.join(__dirname, 'templates')

const checkAuth = function(req, res, next){
    const auth = req.authStatus = true  //false

    if(auth){
        console.log('Está logado, pode continuar')
        next()
    }else{
        console.log('Não está logado, faça o login')
        next()
    }
}

// ULTILIZAR ESTE MIDDLEWARE
app.use(checkAuth)

app.get('/',(req, res)=>{
      res.sendFile(`${basePath}/index.html`)
})

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
    console.log(basePath)
})