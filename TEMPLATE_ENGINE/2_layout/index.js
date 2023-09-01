const express = require('express')
const port = 3000
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/', (req, res) =>{
    return res.render('home')
})

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})