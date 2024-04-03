const express = require('express')
const app = express()
const PORT = 3000

app.use(express.static('public'))

app.get('/', function (req, res) {
   res.redirect('index1.html');
})

app.get('/cities', function (req, res) {
    res.json(['Abha','Abqaiq', 'Bahah', 'Dammam', 'Hufuf',
    'Jawf', 'Kharj', 'Al-Khubar', 'Qatif', 'Taif', 'Arar',
    'Buraydah', 'Dhahran', 'Ḥail', 'Jiddah', 'Jizan', 'Khamis Mushayt',
    'Mecca', 'Medina', 'Najran', 'Ras Tanura', 'Riyadh',
    'Sakaka', 'Tabuk', 'Yanbu'])
})

app.listen(PORT, function () {
    console.log(`Server port http://localhost:${PORT}`)
})
