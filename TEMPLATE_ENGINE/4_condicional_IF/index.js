const express = require('express')
const port = 3000
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) =>{
    return res.render('dashboard')
})

app.get('/', (req, res) =>{
    const user = {
        name: 'jailson',
        surname: 'nasc',
        age:17
     }
     const palavra = "teste"
     const auth = true
     return res.render('home', {user:user, palavra, auth})
})

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})

