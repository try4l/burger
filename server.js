var express = require("express");
var methodOverride  = require("method-override");
var bodyParser = require("body-parser");

var port = process.env.PORT || 3000;

var app = express();

// Set Handlebars.
var exphbs = require("express-handlebars");

// Serve static content for the app from the "public" directory in the application directory.
//app.use(express.static("public"));
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));	// ? is this oll korrect?

//app.use(methodOverride('X-HTTP-Method-Override'));		//??? is this correct NO
app.use(methodOverride('_method'));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(port);
console.log("Listening on port: ", port);