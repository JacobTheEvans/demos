var express = require("express");
var imgur = require("imgur-node-api");
var path = require("path");
var bodyParser = require("body-parser");
var multer = require("multer");
var fs = require("fs");

var data = [
];

var final_data = [

];

var uploadToImgurAndRemove = function(files) {
  for(var i = 0; i < files.length; i++) {
    (function(index) {
      imgur.upload(path.join(__dirname, "/uploads/" + files[index]), function (err, res) {
        if(err) {
          console.log(err);
        } else {
          console.log(res.data.link);
          final_data.push(res.data.link);
          fs.unlinkSync(path.join(__dirname, "/uploads/" + files[index]));
        }
      });
    })(i);
  }
};

var CLIENT_ID = "";
var CLIENT_SECRET = "";

imgur.setClientID(CLIENT_ID);

//sever setup
var app = express();

//setup JSON requests
app.use(bodyParser.urlencoded({limit: "1gb", extended: true}));
app.use(bodyParser.json({limit: "1gb"}));

//setup public facing files
app.use(express.static(path.join(__dirname + "/public")));
app.set("views", __dirname + "/public/views");

//setup view engine
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");

var storage = multer.diskStorage({ //multers disk storage settings
  destination: function (req, file, cb) {
    cb(null, "./uploads/")
  },
  filename: function (req, file, cb) {
    var datetimestamp = Date.now();
    data.push(file.fieldname + "-" + datetimestamp + "." + file.originalname.split(".")[file.originalname.split(".").length -1])
    cb(null, file.fieldname + "-" + datetimestamp + "." + file.originalname.split(".")[file.originalname.split(".").length -1]);
  }
});

var upload = multer({ //multer settings
  storage: storage
}).single("file");

app.get("/", function(req, res) {
  res.render("index.html");
});

app.post("/image", function(req, res) {
  upload(req , res, function(err) {
    if(err) {
      res.status(502).send({error_code:1,err_desc:err});
    } else {
      uploadToImgurAndRemove(data);
      res.status(200).send(err);
    }
  });
});

app.listen(8080)
