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

  let data;

  axios.get(options.url, {headers: options.headers})
   .then(res => {
    data = res.data.map(x => {
      let data = {name: x.name, url: x['html_url'], score: x.forks + x.watchers};
      return data;
    })
      // console.log(data);
      callback(data)
      console.log('Github succesfully fetched');
   })
   .catch(err => console.log('Fetch failed from GitHub'));

 }

module.exports.getReposByUsername = getReposByUsername;