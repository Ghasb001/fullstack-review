const mongoose = require('mongoose');
require('dotenv').config();
//mongoose.connect('mongodb://localhost/fetcher');
mongoose.connect(process.env.STRING, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
  console.log('db connected')
})
.catch((err) => {
  console.log('Error', err)
})


let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  name: String,
  url: {type: String, unique: true},
  score: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repos, callback) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB

  Repo.insertMany(repos)
    .then((data) => {
      console.log('Saved successfully')
      callback(data);
  })
  .catch((err) => {
    console.log('Cannot save', err);
  })

}


let filter = (callback) => {
  Repo.find({}).sort('-score')
  .then((result => {
    let repoList = result.map((data) => {
      return {name: data._doc.name, url: data._doc.url, score: data._doc.score};
    });

    callback(repoList);
  }))
}



module.exports.save = save;
module.exports.filter = filter;;