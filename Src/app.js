const express = require('express');
const req = require('express/lib/request');
const app = express();
const path = require('path');

app.listen(process.env.PORT || 3000,()=>console.log('working server on gate number 3000'));

app.use(express.static('Public'));

app.get('/', (req,res)=>{
    res.sendFile(path.resolve(__dirname, '../Views/home.html'));
})

app.get('/register', (req,res)=>{
    res.sendFile(path.resolve(__dirname, '../Views/register.html'));
})