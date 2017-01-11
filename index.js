'use strict';
let express = require("express");
let hbs = require("hbs");
let app = express();

app.use(express.static(__dirname + '/public')); // Serve static content (css, etc) for the app from the “public” directory in the application directory
app.set("view engine", "hbs");

app.listen(3000, function() {
    console.log("app listening on port " + this.address().port);
});

let compliments = require("./controllers/compliments.js");
app.get("/", compliments.index);

app.get("/:name", compliments.index);
