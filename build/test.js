var fs = require("fs");
var path = require('path');
var filePath = path.resolve('../dist');
fs.readdir(filePath, function (err, files) {
  console.log(err);
  console.log(files);
  files.forEach(x => {
    console.log(x);
  });
});