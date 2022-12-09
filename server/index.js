const express = require('express');
let app = express();
const {save, filter} = require('../database/index.js');
const {getReposByUsername} = require('../helpers/github.js');


// TODO - your code here!
// Set up static file service for files in the `client/dist` directory.
// Webpack is configured to generate files in that directory and
// this server must serve those files when requested.

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database

  let user = req.body.user
  getReposByUsername(user, (result) => {
      console.log(result);
      save(result, (final) => {
        if (result === final) {
          res.send(final);
        } else {
          res.send([]);
        }
      });
  });

});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  //here is where the issues are happening; the top 25 are always being pushed in
  //sort method
  //check for duplicates
  filter(result => {
    console.log('RESULT', result);
    result = result.sort((a, b) => a.score - b.score);
    let data = [];
    if (result.length <= 25) {
      for (let each of result) {
        data.push(each)
      }
      res.send(data)
    } else {
      for (var i = 0; i < 25; i++) {
        data.push(result[i]);
      }
      res.send(data);
    }
  })

});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

