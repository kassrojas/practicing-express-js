// import express
const express = require('express');
const vocabData = require('./vocabulary.json');
// initialize app variable by setting it to value of express()
const app = express();
const PORT = 3001;


// allows STATIC (html) assets to be availble in public directory (think of the public dir the root dir-- it's what the user views)
// anything in the public folder can be viewed by the user
app.use(express.static('public'));

//if you go to this path in the browser or through insomnia, you should see your entire json object

// GET all vocab
app.get('/api/vocab', (req, res) => {
  console.info(`${req.method} request to get all vocab`);
  return res.status(200).json(vocabData)
});


// GET request for a single vocab term
app.get('/api/vocab/:id', (req, res) => {
  if (req.params.id) {

    console.info(`${req.method} request received to get a single a review`);
    const vocabId = req.params.id;
    for (let i = 0; i < vocabData.length; i++) {
      const v = vocabData[i];
      if (v.id === vocabId) {
        res.status(200).json(vocabData[i]);
        return;
      }
    }
    res.status(404).send('term not found');
  } else {
    res.status(400).send('term ID not provided');
  }
});

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);