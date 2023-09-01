const express = require('express')
const port = 3333
const exphbs = require('express-handlebars')
// Utilizando o express
const app = express()
// Utilizando o handlebars
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/', (req, res) =>{
    return res.render('home', {layout:false})
})

app.listen(port, ()=>{
  console.log(`http://localhost: ${port}`)
})
