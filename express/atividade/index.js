const express = require('express')
const app = express()
const port = 3000
// const path = require('path')
// const basePath = path.join(__dirname, 'templates')

app.use(express.json())

app.use(express.urlencoded({
    extended:true
})) 

app.get('/', (req, res) => {
    res.send(` <section>
    <h1>Home</h1>
    <nav style="display: flex; gap: 1rem;  color: #000; font-size: 20px; font-family: sans-serif;">
        <a href="/cursos" style="text-decoration: none; color: green;">cursos</a>
        <a href="/formContato" style="text-decoration: none; color: red;">Formulario Contato</a>
    </nav>
 </section>`)
})

app.get('/cursos', (req, res) => {
        res.send(`<h1 style="color: green; font-family: sans-serif;">Cursos</h1>
        <div style="display: flex; gap: 1rem">
        <img src="https://jurispm.com.br/wp-content/uploads/2020/11/Policial_Mitlitar_Entrevista.jpg" alt="">
        <img src="https://caching.alfaconcursos.com.br/alfacon-production/images/images/000/021/016/original/WhatsApp_Image_2022-02-02_at_18.19.56.jpeg?1644328630" alt="">
        <img src="https://www.smartpol.com.br/admin/assets/uploads/images/products/p_30/Curso-completo-PRF---site-o_1eqqa896b1gvh1s8rd2g1rk6vbqb.png" alt="">
        <img src="https://i.ytimg.com/vi/GN365NGxde8/maxresdefault.jpg" alt="">
      </div>`)
})

app.get('/formContato', (req, res) => {
    res.send(`
    <h1 style="color: red; font-family: sans-serif;">Formulario Contato</h1>
    <form action="/contato" method="post">
       <input type="text" name="name" placeholder="Nome"><br>
       <input type="email" name="email" placeholder="Email"><br>
       <input type="text" name="age" placeholder="idade"><br>
       <input type="tel" name="telefone" placeholder="Telefone"><br>
       <button type="submit">Enviar</button>
   </form>
    `)
})

app.post('/contato', (req, res) => {
    const { name, email, age, telefone} = req.body
    novoContato.push({ nome:name, email:email, idade:age, telefone:telefone})
    console.log(novoContato)
    res.json({ message: 'contato cadastrado com sucesso!' })
})
const novoContato = []


app.listen(port, () => {
    console.log(`http://localhost: ${port}👌`)
})
