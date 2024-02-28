const express = require('express')
const app = express()
const port = process.env.PORT||3000;

app.use(express.static("public"))


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.get('/api/cities', (req, res) =>{
    res.status(200).json({
        citiesInfo:[
            {
                city: 'mecca',
                region: 'makkah'
            },
            {
                city: 'jeddah',
                region: 'makkah'
            },
        ]
    })
})

app.post('/api')

app.listen(port, ()=>{
    console.log("Server port :"+port)
})
