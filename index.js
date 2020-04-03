const express = require('express');
const hbs = require('hbs');
const port = 9090;

const app = express();

app.set('view engine', 'hbs');

/*For testing*/
app.get('/', function(req, res){
    res.send("Hello World");    
})

app.listen(port, function(){
    console.log("Listening at port " + port);
})

app.use(express.static(__dirname));

app.get('/sign-up', function(req, res){
    res.sendFile('views/sign-up.html', {root: __dirname});
});

app.get('/log-in', function(req, res){
    res.sendFile('views/log-in.html', {root: __dirname});
});

app.get('/user/userName', function(req, res){
    var userName = req.params.username;
    res.sendFile('views/user-profile.html', {root: __dirname});
});

app.get('cat/catName', function(req, res){
    var catName = req.params.username;
    res.sendFile('views/cat-profile.html', {root: __dirname});
});