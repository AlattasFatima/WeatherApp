const express = require('express')
const app = express()

app.get('/',(req,res)=>{
     console.log("HTML")
    res.sendFile(__dirname + '/index.html')
})

app.get('/weatherApp.css', function(req, res){
    console.log(" CSS")
    res.sendFile(__dirname + '/' + 'weatherApp.css')
})

app.get('/weatherApp.js', function(req, res){
    console.log(" JAVA SCRIPT")
    res.sendFile(__dirname + '/' + 'weatherApp.js')
})

// app.get('/Media', function(req, res){
//     console.log(" Media")
//     res.sendFile(__dirname + '/' + 'Media')
// })

app.listen(3000, ()=>{
    console.log("Server port : 3000")
})
