const questionForm = document.querySelector('#add-q-form');
const successMsg = document.querySelector('#success-message');
const submitBtn = document.querySelector('#submit-btn');
const questionInput = document.querySelector('#question-input');
const answerInput = document.querySelector('#answer-input');
const urlInput = document.querySelector('#url-input');

questionForm
  .addEventListener('submit', (e) => {
    e.preventDefault();

    let question = questionInput.value;
    let answer = answerInput.value;
    let url = urlInput.value.trim();

    const newQuestion = {
      question,
      answer,
      url
    };

    if (newQuestion) {
      // Fetch POST request to the server
      fetch('/questionlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(newQuestion),
      })
        .then((res) => res.json())
        .then((data) => {
          submitBtn.textContent = `${data.status}`;
          setTimeout(() => {
            submitBtn.textContent = "Submit Question";
            questionInput.value = '';
            answerInput.value = '';
            urlInput.value = '';
          }, 1200);
        });

    } else if (error) {
      console.error('Error:', error);
    }
  });

