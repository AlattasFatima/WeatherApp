const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/style.css', function(req,res){
    res.sendFile(__dirname + '/style.css')
})

app.listen(3000, ()=>{
    console.log("Server port : 3000")
})
