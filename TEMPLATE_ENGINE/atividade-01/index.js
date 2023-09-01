const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {
    const produto1 = [
        {
           img1: 'https://a-static.mlcdn.com.br/800x560/cadeira-de-escritorio-presidente-giratoria-pre-002-otello/magazineluiza/224326700/51e1f1d94d2d80378ec251304e507297.jpg',
           name: 'cadeira',
           age: '400',
           dec: 'amassada'
        },
        {
            img2: 'https://m.media-amazon.com/images/I/61dkN73fPrL._AC_UF1000,1000_QL80_.jpg',
            namee: 'bicicleta',
            agee: '900',
            decc: 'novo'
         },
         {
            img3: 'https://quatrorodas.abril.com.br/wp-content/uploads/2019/09/audi-rs-7-sportback-e1568147517790.jpg?quality=70&strip=info',
            nameee: 'carro',
            ageee: '600000',
            deccc: 'novo'
         }
    ]

    return res.render('dashboard', {produto1})
})
 app.get('/dashboard2', (req, res) => {
     const produto2 = [
   
   ]
   return res.render('dashboard', {produto2})
 })
  app.get('/dashboard3', (req, res) => {
     const produto3 = [
        
    ]
    return res.render('dashboard', {produto3})
})

app.get('/', (req, res) => {
   const auth = true
    return res.render('home', {auth: auth})
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})