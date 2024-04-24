const apiKey = "790537514169f7621c8db46f98f30066";
const express = require('express')
const app = express()
const PORT = 3000

app.use(express.static('public'))

app.get('/', function (req, res) {
   res.redirect('index1.html');
})

app.get('/cities', function (req, res) {
    res.json(['Abha','Abqaiq', 'Bahah', 'Dammam',
    'Kharj', 'Al-Khubar', 'Taif', 'Arar',
    'Buraydah', 'Dhahran', 'Ḥail', 'Jeddah', 'Jizan', 'Khamis Mushayt',
    'Mecca', 'Medina', 'Najran', 'Ras Tanura', 'Riyadh',
    'Sakaka', 'Tabuk', 'Yanbu'])//try change the values in the array
})

app.post('/',
    (req, res) => {    });


    
app.listen(PORT, function () {
    console.log(`Server port http://localhost:${PORT}`)
})
