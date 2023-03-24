const termEl = document.querySelector('#terms');
const btnFetchTerms = document.querySelector('#fetch-term-btn');
const blurbEl = document.querySelector('.api-blurb');

const getTerms = async () => {
  const result = await fetch('/api/question', {
    method: 'GET',
  });
  const json = await result.json();
  return json;
};


// you can pass in whatever name you want
const renderTerms = (term) => {
  // dynamically create card with const json from fetch request
  const cardEl = document.createElement('section');
  cardEl.classList.add('card', 'my-2', 'p-2');
  cardEl.setAttribute('key', term.id);

  // create card header
  const cardHeaderEl = document.createElement('div');
  cardHeaderEl.classList.add('card-header', 'my-2');
  cardHeaderEl.innerHTML = `<h4>${term.question}</h4>`;

  // create card body
  const cardBodyEl = document.createElement('div');
  cardBodyEl.classList.add('card-body', 'hidden');
  cardBodyEl.innerHTML = `
  <p class="card-text answer-para">${term.answer}</p>
  <a href="${term.url}" class="btn answer-para jumbotron" target="_blank">
    Learn Further
  </a>
  `;

  // create card button
  const cardButtonEl = document.createElement('button');
  cardButtonEl.classList.add('jumbotron', 'btn', 'mb-2');
  cardButtonEl.setAttribute('id', 'view-a-btn')
  cardButtonEl.textContent = "Toggle Answer";

  // append elements
  cardEl.appendChild(cardHeaderEl);
  cardEl.appendChild(cardBodyEl);
  cardEl.appendChild(cardButtonEl);
  termEl.appendChild(cardEl);

  cardButtonEl.addEventListener('click', function (e) {
    const target = e.target.closest('#view-a-btn');
    if (target) {
      cardBodyEl.classList.toggle('hidden');
    }
  })
};


const termBtnHandler = () => {
  getTerms().then((res) => res.forEach((term) => renderTerms(term)));
  btnFetchTerms.classList.add('hidden');
  blurbEl.innerHTML = `<h3> Viewing All Questions </h3>`;
};

btnFetchTerms.addEventListener('click', termBtnHandler);




