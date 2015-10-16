var request = require('request');
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  request('http://localhost:3001/user', function(err, response, body){
    if (!err) {
      var user = JSON.parse(body);
      res.send('User Id:' + user.id +'<br/>Fetched At:' + user.fetchedAt);
    } else {
      console.log("err: " + err);
      res.send(err);
    }
  });
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
