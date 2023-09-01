const { request } = require('express')
const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql2')


const app = express()
const port = 3333

// configurar a TEMPLATE ENGINE - handlebars
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

// Middleware para utilizar os arquivos estáticos
app.use(express.static('public'))

// Rota - localhost:3333
app.get('/', (req, res) =>{
    return res.render('home')
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