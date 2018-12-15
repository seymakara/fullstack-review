const express = require('express');
const bodyParser = require('body-parser');
let app = express();
const getReposByUsername = require('../helpers/github.js').getReposByUsername;
const save = require('../database/index.js').save;

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser());

app.post('/repos', function (req, res) {

  getReposByUsername(req.body.username, function (error, repos) {
    if (error) {
      console.log("ERROR AT WRITEDATABASE CB", error)
    }
    console.log("len", repos.length)
    for (var i = 0; i < repos.length; i++) {
      save(repos[i])
    }
    res.send(200, repos)
  })

  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});

