const { request } = require('express')
const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql2')

const port = 4000
const app = express()

// RECEBER DADOS DO FRONT END - JSON
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// configurar a TEMPLATE ENGINE - handlebars
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

// Middleware para utilizar os arquivos estáticos
app.use(express.static('public'))

// Rota - localhost:3333
app.get('/', (req, res) =>{
    return res.render('home')
})

// Rota - localhost:333/books/insertbook
app.post('/books/insertbook', (req, res) =>{
     const {title, nm_paginas} = req.body
    //  console.log(title, nm_paginas)
    const sql = `INSERT INTO books(title, nm_paginas) values ('${title}', '${nm_paginas}')`

    conn.query(sql, (err) =>{
        if(err){
            console.log(err)
            return
           }
           return  res.redirect('/books')
    })
    
})

// Rota - localhost:3333/books => Lister livros
app.get('/books', (req, res)=>{
    const sql = 'SELECT * FROM books'
    conn.query(sql, (err, data)=>{  
       if(err){
        console.log(err)
        return
       }
       const books = data
    //    console.log(books)
       res.render('books', {books})
    })
    
})

app.get('/books/:id', (req, res) =>{
     const id =  req.params.id
    //  console.log(id)
     const sql = `SELECT * FROM books WHERE id = ${id}`

     conn.query(sql, (err, data)=>{
         if(err){
             console.log(err)
             return
         } 
         const book = data[0]
        //  console.log(book)
         return res.render('book', {book})
     })

})
// Criar uma conexão com o banco
const conn = mysql.createConnection({
    host:'localhost',
    port:'3306',
    user:'aluno_medio',
    password:'@lunoSenai23.',
    database:'banco2'
})
//estabelecer uma conexão com o banco
conn.connect((err)=>{
   if(err){
    console.log(err)
    return
   }
   console.log('MYSQL Conectado!')

   app.listen(port, () =>{
    console.log(`http://localhost:${port}`)
   })
})