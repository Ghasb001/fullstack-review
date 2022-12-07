const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (username, callback) => {
  // TODO - Use the axios module to request repos for a specific
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

  var data;

  axios.get(options.url, {headers: options.headers})
  .then(res => {
   console.log('Here');
  })
  .catch(err => console.log('Fetch failed from GitHub'));

 }

module.exports.getReposByUsername = getReposByUsername;