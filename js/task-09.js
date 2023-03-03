const changeEl = document.querySelector('button.change-color');
const nameColor = document.querySelector('.color');

changeEl.addEventListener('click', function(){
  let makeRandomColor = getRandomHexColor();
  document.querySelector('body').style.background = makeRandomColor;
    nameColor.textContent = makeRandomColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
