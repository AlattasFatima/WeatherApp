const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/', function (req, res) {
    res.redirect('index.html');
})

app.get('/cities', function (req, res) {
    res.json(['Mecca','Riyadh','Dammam'])
})

app.listen(3001, function () {
    console.log('Server port http://localhost:3000')
})
