"use strict";
var express = require("express");
var path = require("path");

//server setup
var app = express();
var server = app.listen(9080);
var io = require("socket.io")(server);

//setup public facing files
app.use(express.static(path.join(__dirname + "/public")));
app.set("views", __dirname + "/public/views");

//setup view engine
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");


app.get("/", function(req, res) {
  res.render("index.html");
});
