const termEl = document.querySelector('#terms');
const categoryEl = document.querySelector('#categories');
const btnFetchTerms = document.querySelector('#fetch-term-btn');
const btnFetchCategories = document.querySelector('#fetch-cat-btn');

const getTerms = async () => {
  const result = await fetch('/api/vocab', {
    method: 'GET',
  });
  const json = await result.json();
  return json;
};

const getCategories = async () => {
  const categories = await fetch('/api/categories', {
    method: 'GET',
  });
  const jsonCat = await categories.json();
  return jsonCat;
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
}

const renderCategories = (vocab) => {
  categoryEl.innerHTML += `
  <div class="card"> 
  <h5 class="card-title">${vocab}</h5>
  </div>
  `
}

const termBtnHandler = () => {
  getTerms().then((res) => res.forEach((item) => renderTerms(item)));
};

const catBtnHandler = () => {
  getCategories().then((res) => res.forEach((item) => renderCategories(item)));
};




btnFetchTerms.addEventListener('click', termBtnHandler);
btnFetchCategories.addEventListener('click', catBtnHandler);