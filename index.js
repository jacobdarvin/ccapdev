//Imports
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const handlebars = require('handlebars');

//Application Init
const app = express();
const port = 9090;

//HBS Init
app.set('view engine', 'hbs');

//Engine Init
app.engine('hbs', exphbs({
	extname: 'hbs',
	defaultView: 'main',
	layoutsDir: path.join(__dirname, '/views/layouts'),
	partialsDir: path.join(__dirname, 'views/partials'),

	//Helpers
	helpers: {
		cap: function(text) { return text.toUpperCase(); },
		em: function(text) {
			var x = `<em>${text}</em>`;

			return new handlebars.SafeString(x);
		}
	}
}));

//HBS Init
app.set('view engine', 'hbs');

//Home Route
app.get('/', function(req, res){
    res.render('index', {
    	title: 'Home',
    })  
});

app.get('/feed', function(req, res){
    res.render('feed', {
    	title: 'Cats',
    })  
});
//TO DO, DO CATFEED
app.get('/cat-feed', function(req, res){
    res.render('feed', {
    	title: 'Cat Feed',
    })  
});

//Files
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

//Show Port
app.listen(port, function(){
    console.log("Listening at port " + port);
})

//Static URL
app.use(express.static(__dirname));
