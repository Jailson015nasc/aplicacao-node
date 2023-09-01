const express = require('express')
const port = 3000
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) =>{
    const items = ['Item 01', 'Item 02', 'Item 03']
    return res.render('dashboard', {items})
})

app.get('/', (req, res) =>{
    const user = {
        name: 'jailson',
        surname: 'nasc',
        age:17
     }
     const auth = true
     const approved = false
     const palavra = "teste"
     return res.render('home', {user:user, palavra, auth, approved})
})

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})
