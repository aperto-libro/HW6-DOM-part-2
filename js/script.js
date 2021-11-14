const btn = document.querySelector('.button-confirm');
const figure = document.querySelector('.figure-list');
const box = document.querySelector('.box');

btn.addEventListener('click', changeColor);
figure.addEventListener('change', changeSelect);

function changeSelect(e) {
  box.classList = `box ${e.target.value}`;
}

function changeColor() {
  const color = document.querySelector('.input-color');
  box.style.background = `${color.value}`;
}
