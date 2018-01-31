// http://localhost:8090/node_modules/angular/angular.min.js

var express = require('express');
var bodyParser = require("body-parser");
const fileUpload = require('express-fileupload');
var formidable = require('formidable');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(fileUpload());

app.use(express.static('client'));
app.use(express.static('node_modules'));

// app.use(express.static('node_modules/angular'));
var fs = require('fs');
app.get('/fileuploady', function uploady(req, res) {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      res.write('File uploaded');
      res.end();
    });
});

// if (req.url == '/fileupload') {
//     var form = new formidable.IncomingForm();
//     form.parse(req, function (err, fields, files) {
//       res.write('File uploaded');
//       res.end();
//     });
//   } 
// const path = require('path');
// app.use('/public', express.static(path.join(__dirname, 'public')))

//***************************************************************************************************** */
// app.get('/student', apiStudent.getStudents);
// function getCourses(req, res) {
//     courseCtrl.getCourses(function(err, courses) {
//         if (err) {
//             res.end('Sorry Dude! '+ err);
//         }
//         res.end(JSON.stringify(courses));
//     })
// }

// var multer  = require('multer');
// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './uploads/')
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname+ '-' + Date.now()+'.jpg')
//     }
// });
// var upload = multer({ storage: storage });

// app.post('/multer', upload.single('file'));



//***************************************************************************************************** */

// Listen to '/' in GET Verb methods - serve the main Angular index.html file
app.get('/', function (req, res) {

    fs.readFile('client/index.html', 'utf8', function (err, data) {
        if (err) {
            console.log(err);
        }
        res.end(data) 
    });
   
});

// app.post('/upload', function(req, res) {
//     console.log('>>> hello in server fu');
//     if (!req.files)
//       return res.status(400).send('No files were uploaded.');
   
//       console.log(req.files);
//     // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
//     let sampleFile = req.files.file;
   
//     // Use the mv() method to place the file somewhere on your server
//     sampleFile.mv(`uploads/${sampleFile.name}`, function(err) {
//       if (err)
//         return res.status(500).send(err);
   
//       res.send('File uploaded!');
//     });
//   });
  


var server = app.listen(8090, function () {

})