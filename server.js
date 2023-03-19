// import express
const express = require('express');
const path = require('path');
const vocabData = require('./db/vocabulary.json');
// initialize app variable by setting it to value of express()
const app = express();
const PORT = 3001;

// Sets up the Express app to handle data parsing
// app.use denotes a middleware in expressjs
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// allows STATIC (html) assets to be availble in public directory (think of the public dir the root dir-- it's what the user views)
// anything in the public folder can be viewed by the user
app.use(express.static('public'));

// as soon as you visit the localhost:3001/ you will be send the index.html file to view
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
})


// GET all vocab
app.get('/api/vocab', (req, res) => {
  console.info(`${req.method} request to get all vocab`);
  return res.status(200).json(vocabData)
});


// GET for single vocab by id
app.get('/api/vocab/:id', (req, res) => {
  console.info(`${req.method} request received to get a single a review`);
  const paramId = req.params.id;
  if (paramId) {
    for (let i = 0; i < vocabData.length; i++) {
      const v = vocabData[i];
      if (v.id === paramId) {
        return res.status(200).json(vocabData[i]);
      }
    }
  }
  res.status(404).json('not found');
});

//GET by tech, need new path
app.get('/api/vocab/new/:tech', (req, res) => {
  // Coerce the specific search term to lowercase
  const requestedTerm = req.params.tech.toLowerCase();
  // Iterate through the terms name to check if it matches `req.params.term`
  for (let i = 0; i < vocabData.length; i++) {
    if (requestedTerm === vocabData[i].tech.toLowerCase()) {
      return res.json(vocabData[i]);
    }
  }
  // Return a message if the term doesn't exist in our DB
  return res.json('No match found');
});


// GET all items from a given category
app.get('/api/vocab/type/:category', (req, res) => {
  const requestedCategory = req.params.category.toLowerCase();
  const resultsByCat = [];

  for (let i = 0; i < vocabData.length; i++) {
    const currentTermCategory = vocabData[i].category;
    if (requestedCategory === currentTermCategory) {
      resultsByCat.push(vocabData[i]);
    }
  }
  return res.json(resultsByCat);
});

// GET just the categories
app.get('/api/categories', (req, res) => {

  // make an array with all the cateogories
  const categoryArr = vocabData.map((tech) => tech.category);

  // filter duplicated categories
  const filteredResult = categoryArr.filter((cat, i) => categoryArr.indexOf(cat) === i);

  // return new array
  return res.json(filteredResult);

})

// POST request to add vocab word
app.post('/api/vocab', (req, res) => {
  console.info(`${req.method} request received for /api/vocab`);

  let response = "";

  if (req.body && req)






    console.info(req.rawHeaders);
  console.info(req.body);
});









// Fallback route-- if user attempts routes that don't exist
app.get('*', (req, res) =>
  res.send(
    `That path doesn't exist, try <a href="http://localhost:${PORT}/api/vocab">http://localhost:${PORT}/api/vocab</a>`
  )
);

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);