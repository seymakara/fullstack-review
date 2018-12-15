const request = require('request');
const config = require('../config.js');

let getReposByUsername = (username, writeDatabaseCB) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  request(options, (error, response, repos) => {
    if (!error && response.statusCode == 200) {
      writeDatabaseCB(error, JSON.parse(repos));
    } else {
      console.log("ERROR AT API REQUEST: " + error);
    }
  })
}

module.exports.getReposByUsername = getReposByUsername;