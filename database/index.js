const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');


let repoSchema = mongoose.Schema({
  owner: {
    login: String,
    url: String
  },
  id: Number,
  full_name: String,
  html_url: String
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repo) => {
  Repo.findById(repo.id, function (err, found) {
    if (err) console.log("ERROR", err);
    if (found) return;
    var repoTosave = new Repo(repo)
    repoTosave.save(function (err, ) {
      if (err) console.log("ERROR", err);
      console.log("SAVED repo to db", repo.full_name)
    });
  });
}

let retrieveFromDb = (callback) => {
  Repo.find({}, (err, data) => {
    if (err) throw err;
    callback(data);
  })

}

module.exports.save = save;
module.exports.retrieveFromDb = retrieveFromDb;