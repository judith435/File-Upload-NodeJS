// http://localhost:8090/node_modules/angular/angular.min.js

var express = require('express');
var bodyParser = require("body-parser");
const fileUpload = require('express-fileupload');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(fileUpload());

app.use(express.static('client'));
app.use(express.static('node_modules'));

// app.use(express.static('node_modules/angular'));
var fs = require('fs');

// const path = require('path');
// app.use('/public', express.static(path.join(__dirname, 'public')))


// Listen to '/' in GET Verb methods - serve the main Angular index.html file
app.get('/', function (req, res) {

    fs.readFile('client/index.html', 'utf8', function (err, data) {
        if (err) {
            console.log(err);
        }
        res.end(data) 
    });
   
});

app.post('/upload', function(req, res) {
    console.log('>>> hello in server fu');
    if (!req.files)
      return res.status(400).send('No files were uploaded.');
   
      console.log(req.files);
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let sampleFile = req.files.file;
   
    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv(`uploads/${sampleFile.name}`, function(err) {
      if (err)
        return res.status(500).send(err);
   
      res.send('File uploaded!');
    });
  });
  


var server = app.listen(8090, function () {

})