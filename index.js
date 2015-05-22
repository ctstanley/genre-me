var express = require("express"),
	bodyParser = require("body-parser"),
	bcrypt = require("bcrypt"),
	session = require("express-session"),
	path = require("path"),
	db = require("./models");

app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
	secret: "Very secret",
	resave: false,
	saveUnitialized: true
}));

app.get("/", function (req, res){
	res.send("Coming soon");
});

app.listen(3000, function(){
	console.log("Running!");
});

// idea: hard code genre list to select from
// todo: come up with a second schema idea
//todo: scrape wiki music genre list
