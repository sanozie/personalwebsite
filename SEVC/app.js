var express = require("express");
var app = express();
var path=require('path');
//body parser as well
var bodyParser = require("body-parser");
var pathViews = __dirname + '/views/';
app.use(express.static(path.join(__dirname,"views")));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.static(path.join(__dirname,"imgs")));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.get("/", function(req, res) {
   res.render("index.html");
});
app.get("/cart", function(req, res) {
	res.render("cart.ejs");
});
app.locals.videodata = require(pathViews + "/fake.json");
app.locals.data = "thing";
console.log(app.locals.videodata);

 //the server is listening on port 3000 for connections
 app.listen(3000, function () {
   console.log('Example app listening on port 3000!')
 });
