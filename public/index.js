const termEl = document.querySelector('#terms');
const btnFetchTerms = document.querySelector('#fetch-term-btn');
const btnFetchCategories = document.querySelector('#fetch-cat-btn');

const getTerms = async () => {
  const result = await fetch('/api/vocab', {
    method: 'GET',
  });
  const json = await result.json();
  console.log(json);
  return json;
}

const getCategories = async () => {
  const categories = await fetch('/api/categories', {
    method: 'GET',
  });
  const jsonCat = await categories.json();
  console.log(jsonCat)
  return jsonCat;
}


const termBtnHandler = () => {
  console.log('btn');
  getTerms();
};

const catBtnHandler = () => {
  console.log('cat btn');
  getCategories();
}

btnFetchTerms.addEventListener('click', termBtnHandler);
btnFetchCategories.addEventListener('click', catBtnHandler);