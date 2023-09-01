const express = require('express')
const app = express()
const port = 3200

app.get('/',(req, res)=>{
   res.send('OLÁ, MUNDO!')
})
app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})