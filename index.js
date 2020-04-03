const express = require('express');
const hbs = require('hbs');
const port = 9090;

const app = express();

app.set('view engine', 'hbs');

app.get('/', function(req, res){
    res.send("Hello World");    
})