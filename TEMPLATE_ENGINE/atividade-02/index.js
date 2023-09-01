const express = require('express')
const app = express()
const port = 9999
const path = require('path')
const bodyParser = require('body-parser')
const router = require('./routers/produto')
const basePath = path.join(__dirname, '../viwes')

app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

app.use(router)

app.use(function (req, res, next) {
    res.status(404).sendFile(`${basePath}/404.handlebars`)
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})

