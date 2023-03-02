const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulList = document.querySelector('#ingredients');
for (let i=0; i <= ingredients.length; i++){
  let li = document.createElement('li');
  li.classList.add('item');
  li.innerHTML = ingredients[i];
  ulList.append(li);
}