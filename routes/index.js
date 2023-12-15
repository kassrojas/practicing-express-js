// segements out router logic in express
const router = require('express').Router();
const fs = require('fs');
// Helper method for generating unique ids
const uuid = require('../helpers/uuid');
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils')

// GET Route for retrieving all the existing questions
router.get('/questionlist', (req, res) => {
  console.info(`${req.method} request received for questions`);
  readFromFile('./db/question.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for adding a new question
router.post('/questionlist', (req, res) => {
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
      status: 'Adding...',
      body: newQuestion,
    }
    res.json(successRes);
  } else {
    res.error('Error adding question');
  }
});

// router.delete(`/api/question/:id`, (req, res) => {
//   const { id } = req.params;

//   const savedQuestion = fs.readFileSync('./db/question.json', 'utf-8');
//   const parsedQuestion = JSON.parse(savedQuestion);

//   const deleteQuestion = parsedQuestion.filter((q) => {
//     if (q.id == id) {
//       res.send();
//     } else {
//       console.log('error deleting question');
//     };
//   });

//   readAndAppend(deleteQuestion, './db/question.json')
//   res.send();
// });




module.exports = router;