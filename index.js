require('dotenv').config()
const express = require('express')
const http = require('http')
const PORT = process.env.PORT || 1234
const path = require('path')

const app = express()
const server = http.createServer(app)

// Gebruik template engine Express voor DYNAMISCHE content
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'src/views/Pages'))
app.use(express.static(__dirname + '/public'))



app.get('/', (req, res)=> {
    res.render("index.ejs")
})

app.post('/', (req, res)=> {
    console.log(req.body)
})

app.get('/homePage', (req, res)=> {
    res.render("homePage.ejs")
})


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });