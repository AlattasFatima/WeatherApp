const express = require('express')
const app = express()
const PORT = 3000

app.use(express.static('public'))

app.get('/', function (req, res) {
   //res.redirect('index.html');
})

app.get('/cities', function (req, res) {
    res.json(['Mecca','Riyadh','Dammam', 'Jeddah'])//try change the values in the array
})

app.listen(PORT, function () {
    console.log(`Server port http://localhost:${PORT}`)
})
