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
    result = result.sort((a, b) => b.score - a.score);
    let data = [];
    let clear = [];
    console.log('RESULTS', result);
    //var checkers = JSON.stringify(data.slice());

    var i = 0;
    while (data.length < 25) {
      if (clear.indexOf(result[i].name) === -1) {
        data.push(result[i]);
        clear.push(result[i].name)
      }
      i++;
    }
    res.send(data)

    // if (result.length <= 25) {
    //   //let each of result
    //   for (var j = 0; j < result.length - 1; j++) {
    //     if (clear.indexOf(result[j].name) === -1) {
    //       data.push(result[j]);
    //       clear.push(result[j].name)
    //     }
    //     //data.push(each)
    //   }
    //   res.send(data)
    // } else {
    //   for (var i = 0; i < 25; i++) {
    //     if (clear.indexOf(result[i].name) === -1) {
    //       data.push(result[i]);
    //       clear.push(result[i].name)
    //     }
    //     //data.push(result[i]);
    //   }
    //   res.send(data);
    // }
  })

});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

/*

  filter(result => {
    result = result.sort((a, b) => a.score - b.score);
    let data = [];

    var checkers = JSON.stringify(data.slice());

    if (result.length <= 25) {
      //var checkers = JSON.stringify(data.slice());

      for (let each of result) {
        if (!checkers.includes(JSON.stringify(each))) {
          data.push(each)
        }
        //data.push(each)
      }
      res.send(data)
    } else {
      for (var i = 0; i < 25; i++) {
        if (!checkers.includes(JSON.stringify(result[i]))) {
          data.push(result[i]);
        }
        //data.push(result[i]);
      }
      //data = data.filter(repoObj => )
      res.send(data);
    }
  })

*/