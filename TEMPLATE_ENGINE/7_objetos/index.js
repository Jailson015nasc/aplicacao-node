const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 9999

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {
    const items = [1, 2, 3, 4, 5, 6, 7]
    return res.render('dashboard', {items})
})

app.get('/post', (req, res) => {
    const post = {
        title: 'Aprendendo node js',
        category: 'Javascript',
        body: 'Este arquivo vai te ajudar a aprender handlebars',
        comments: 8
    }

    return res.render('blogpost', {post})
})

app.get('/', (req, res) => {
    const user = {
        name: 'jailson',
        surname: 'nasc',
        age: 17
    }
    const auth = true
    const approved = false
    return res.render('home', {user: user, auth, approved })
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})