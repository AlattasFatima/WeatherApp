import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const express = require('express')
const app = express()

app.get('/', function(req,res){
    res.json({title: 'hello world'})
})

app.get('/arr', function(req,res){
    res.json([{id: 1, name:'Mecca'},
    {id: 2, name: 'Riyadh'},
    {id: 3, name: 'Dammam'}])
})

app.listen(3000, function(){
    console.log('Server port :3000')
})
