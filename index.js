//set dependencies
const express = require('express');
const ejs = require('ejs');

//create express object called app
const app = express();

//define port
const port = 3000;

//use ejs as default view engine for app
app.set('view engine', 'ejs');

//when running url '/' render main.ejs file
app.get('/', function(req, res) {
    res.render('main.ejs', {port:port, name:"Calvin"});
})



app.listen(port, function() {
    console.log("Server created at http://localhost:" + port);
})