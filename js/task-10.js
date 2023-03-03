const refs = {
  input: document.querySelector('#controls input'),
  create: document.querySelector('button[data-create]'),
  destroy: document.querySelector('button[data-destroy]'),
  boxes: document.querySelector('div#boxes')
}

function createBoxes(amount){
  const divBlock = [];
  for(let i = 0; i < amount; i++){
    let elem = document.createElement('div');
    elem.style.width = 30 + (10 * i) + 'px';
    elem.style.height = 30 + (10 * i) + 'px';
    elem.style.backgroundColor = getRandomHexColor();
    divBlock.push(elem);
  } 
  refs.boxes.append(...divBlock);
}

refs.create.addEventListener('click', function(){
  let divBorder = refs.input.value;
  if(divBorder > 0){
    createBoxes(divBorder);
  }
});

refs.destroy.addEventListener('click', destroyBoxes);

function destroyBoxes(){
  refs.boxes.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


