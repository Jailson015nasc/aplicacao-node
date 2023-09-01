const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3333

const hbs = exphbs.create({
    partialsDir: ['views/partials']
})
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {
    const items = [1, 2, 3, 4, 5, 6, 7]
    return res.render('dashboard', {items})
})

app.get('/blog', (req, res) => {
    const posts = [
        {
            title: 'Aprendendo ',
            category: 'Javascript',
            body: 'Este arquivo vai te ajudar a aprender handlebars',
            comments: 8
        },
        {
            title: 'Aprendendo node js',
            category: 'Javascript',
            body: 'Este arquivo vai te ajudar a aprender handlebars',
            comments: 8
        },
        
        {
            title: 'Aprendendo node js',
            category: 'Javascript',
            body: 'Este arquivo vai te ajudar a aprender handlebars',
            comments: 8
        }
    ]
    return res.render('blog', {posts})
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