const termEl = document.querySelector('#terms');
const btnFetchTerms = document.querySelector('#fetch-term-btn');


const getTerms = async () => {
  const result = await fetch('/api/question', {
    method: 'GET',
  });
  const json = await result.json();
  return json;
};


// you can pass in whatever name you want just make sure you pass in data as "passedInName.WhateverPartOfTheObjectYouWant"
const renderTerms = (vocab) => {
  termEl.innerHTML += `
  <div class="card m-2 p-2">
  <div class="card-body">
  <h5 class="card-title answer-para">${vocab.question}</h5>
  <p class="card-text hidden" id=${vocab.id}>${vocab.answer}</p>
  <button class="btn btn-primary answer-btn">View Answer</button>
  <a href="${vocab.url}" class="btn btn-primary" target="_blank">Look Further</a>
  </div>
  </div>
  `;
  const btnShowAnswer = document.querySelectorAll('.answer-btn');

  for (let i = 0; i < btnShowAnswer.length; i++) {
    btnShowAnswer[i].addEventListener('click', showAnswer);
  }
};

const showAnswer = () => {
  console.log('here');
};

const termBtnHandler = () => {
  getTerms().then((res) => res.forEach((item) => renderTerms(item)));
};

btnFetchTerms.addEventListener('click', termBtnHandler);




