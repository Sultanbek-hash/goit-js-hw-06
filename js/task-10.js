const result = {
  input: document.querySelector('#controls input'),
  create: document.querySelector('button[data-create]'),
  destroy: document.querySelector('button[data-destroy]'),
  boxes: document.querySelector('div#boxes')
}

function createBoxes(amount){
  for(let i = 0; i < amount; i++){
    let elem = document.createElement('div');
    elem.style.width = 30 + (10 * i) + 'px';
    elem.style.height = 30 + (10 * i) + 'px';
    elem.style.backgroundColor = getRandomHexColor();
    result.boxes.append(elem);
  }
}

result.create.addEventListener('click', function(){
  let a = result.input.value;
  if(a > 0){
    createBoxes(a);
  }
});

result.destroy.addEventListener('click', destroyBoxes);

function destroyBoxes(){
  result.boxes.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


