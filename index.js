var express = require('express')
var app = express()
var cors = require('cors')
var bodyParser = require('body-parser')

var locations = [];
app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/locations', function (req, res) {
  res.json(locations);
})
app.post('/location/add/:id', function (req, res) {
    locations.push(req.body);
    console.log(req.body);
  res.json({success:true});
})

app.listen(8080, function () {
  console.log('listening on port 8080')
});