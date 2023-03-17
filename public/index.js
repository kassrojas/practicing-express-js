const termEl = document.querySelector('#terms');
const categoryEl = document.querySelector('#categories');
const btnFetchTerms = document.querySelector('#fetch-term-btn');
const btnFetchCategories = document.querySelector('#fetch-cat-btn');

const getTerms = async () => {
  const result = await fetch('/api/vocab', {
    method: 'GET',
  });
  const json = await result.json();
  console.log(json);
  return json;
};

const getCategories = async () => {
  const categories = await fetch('/api/categories', {
    method: 'GET',
  });
  const jsonCat = await categories.json();
  console.log(jsonCat)
  return jsonCat;
};

const renderTerms = (vocab) => {
  termEl.innerHTML += `
  <div class="card">
  <h5 class="card-header">${vocab.category}</h5>
  <div class="card-body">
    <h5 class="card-title">${vocab.tech}</h5>
    <p class="card-text">${vocab.definition}</p>
    <a href="${vocab.url}" class="btn btn-primary" target="_blank">Look Further</a>
  </div>
</div>
  `
};

const renderCategories = (vocab) => {
  categoryEl.innerHTML += `
  <div class="card"> 
  <h5 class="card-title">${vocab}</h5>
  </div>
  `
}

const termBtnHandler = () => {
  console.log('btn');
  getTerms().then((res) => res.forEach((item) => renderTerms(item)));
};

const catBtnHandler = () => {
  console.log('cat btn');
  getCategories().then((res) => res.forEach((item) => renderCategories(item)));
};

btnFetchTerms.addEventListener('click', termBtnHandler);
btnFetchCategories.addEventListener('click', catBtnHandler);