const btn = document.querySelector('.button-confirm');
const figure = document.querySelector('.figure-list');
const color = document.querySelector('.input-color');

btn.addEventListener('click', changeFigure);

function changeFigure() {
  let box = document.querySelector('.box');
  box.className = `box ${figure.value}`;
  box.style.background = `${color.value}`;
}
