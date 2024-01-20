const express = require('express')
const multer = require("multer");
const path = require('path')
const app = express()
const port = 3000


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, 'brinde_' + Date.now() + path.extname(file.originalname)) 
  }
})

var upload = multer({ storage: storage});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/upload_files", upload.array("brinde"), uploadFiles);

function uploadFiles(req, res) {
    console.log(req.body);
    console.log(req.files);
    res.send()
}

app.listen (port, () => {
        console.log(`Server Listening on port ${port}`) 

})
