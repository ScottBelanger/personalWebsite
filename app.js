var express = require('express')
var app = express()

app.use(express.static(__dirname + '/public', {
  extensions: ['html']
}));

app.listen(8080, function () {
  console.log('Example app listening on port 3000!')
})