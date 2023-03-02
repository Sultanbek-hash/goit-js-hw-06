const a = document.querySelector('button.change-color');
const b = document.querySelector('.color');
a.addEventListener('click', function () {
  document.querySelector('body').style.background = getRandomHexColor();
  b.innerHTML = getRandomHexColor();
});


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
