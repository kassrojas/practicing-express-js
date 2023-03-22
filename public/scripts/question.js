const questionForm = document.querySelector('#add-q-form');

questionForm
  .addEventListener('submit', (e) => {
    e.preventDefault();

    let question = document.querySelector('#question-input').value;
    let answer = document.querySelector('#answer-input').value;
    let url = document.querySelector('#url-input').value.trim();

    const newQuestion = {
      question,
      answer,
      url
    };

    console.log(newQuestion);

    if (newQuestion) {
      // Fetch POST request to the server
      fetch('api/question', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(newQuestion),
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.status);
          question = '';
          answer = '';
          url = '';
        });

    } else if (error) {
      console.error('Error:', error);
    }
  });

