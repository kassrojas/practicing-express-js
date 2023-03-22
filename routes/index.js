// segements out router logic in express
const router = require('express').Router();
// Helper method for generating unique ids
const uuid = require('../helpers/uuid');
const { readFromFile, readAndAppend } = require('../helpers/fsUtils')

// GET Route for retrieving all the existing questions
router.get('/api/question', (req, res) => {
  console.info(`${req.method} request received for questions`);
  readFromFile('./db/question.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for a new question
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

    const successRes = {
      status: 'successfully added 💥',
      body: newQuestion,
    }
    res.json(successRes);
  } else {
    res.error('Error in adding question');
  }
});


module.exports = router;