const express = require('express')
const port = 3333
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/', (req, res) =>{
     const user = {
       name: 'jailson',
       surname: 'nasc',
       age:17
    }
    return res.render('home', {user:user})
})

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})




