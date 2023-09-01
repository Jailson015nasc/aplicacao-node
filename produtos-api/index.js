const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const port = 3000
const produtosRouter = require('./routers/produtos')

app.use(express.static(path.join(__dirname, "public")))

app.use(bodyParser.urlencoded({extended: true}))

app.use(produtosRouter)

app.listen(port, (error) => {
    if(error){
        console.log("deu erro")
        return
    }
    console.log(`http://localhost:${port}`)
})