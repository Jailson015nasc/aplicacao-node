const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    port:'3306',
    user: 'aluno_medio',
    password: '@lunoSenai23.',
    database: 'produtos_db'
})

connection.connect(err => {
    if (err) {
      console.error('Erro ao conectar ao MySQL:', err)
      return
    }
    console.log('Conexão ao MySQL estabelecida')
})

module.exports = connection

  