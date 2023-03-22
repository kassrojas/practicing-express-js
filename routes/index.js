// segements out router logic in express
const router = require('express').Router();
// Helper method for generating unique ids
const uuid = require('../helpers/uuid');
const { readFromFile, readAndAppend } = require('../helpers/fsUtils')

// GET Route for retrieving all the tips
router.get('/api/question', (req, res) => {
  console.info(`${req.method} request received for questions`);
  readFromFile('./db/question.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for a new UX/UI tip
router.post('/api/question', (req, res) => {
  console.info(`${req.method} request received to add a question`);

  const { question, answer, url } = req.body;

  if (req.body) {
    const newQuestion = {
      id: uuid(),
      question,
      answer,
      url,
    };

    readAndAppend(newQuestion, './db/question.json');
    res.json(`question added successfully 🚀`);
  } else {
    res.error('Error in adding question');
  }
});


module.exports = router;