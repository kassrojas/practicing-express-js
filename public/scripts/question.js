const questionForm = document.querySelector('#add-q-form');
let successMsg = document.querySelector('#success-message');
let submitBtn = document.querySelector('#submit-btn');

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
          // question = '';
          // answer = '';
          // url = '';
          submitBtn.textContent = `${data.status}`;
          setTimeout(() => {
            submitBtn.textContent = "Submit Question";
            window.location.reload(); //bc the =''; isnt working
          }, 1200);
        });

    } else if (error) {
      console.error('Error:', error);
    }
  });

