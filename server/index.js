const express = require('express');
const bodyParser = require('body-parser');
let app = express();
const getReposByUsername = require('../helpers/github.js').getReposByUsername;
const save = require('../database/index.js').save;
const retrieveFromDb = require('../database/index.js').retrieveFromDb;

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser());

app.post('/repos', function (req, res) {
  getReposByUsername(req.body.username, function (error, repos) {
    if (error) {
      console.log("ERROR AT WRITEDATABASE CB", error)
    }
    for (var i = 0; i < repos.length; i++) {
      save(repos[i])
    }
    res.send(200, repos)
  })
});

app.get('/repos', function (req, res) {
  retrieveFromDb(repos => {
    res.send(repos)
  })
});


let port = 1128;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});

