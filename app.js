var express = require('express')
var app = express()

app.use(express.static(__dirname + '/public', {
  extensions: ['html']
}));

app.listen(8080, function () {
  console.log('Welcome, please navigate to localhost on port 8080!')
})