const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulList = document.querySelector('#ingredients');

const elements = ingredients.map(options =>{
  const liElm = document.createElement('li');
  liElm.classList.add('item');
  liElm.textContent = options;
  return liElm;
});
ulList.append(...elements);