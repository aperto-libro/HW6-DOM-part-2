const btn = document.querySelector('.button-confirm');
console.log(btn);

btn.addEventListener('click', changeFigure);

function changeFigure() {
  let box = document.querySelector('.box');
  box.classList.add('oval');
}
