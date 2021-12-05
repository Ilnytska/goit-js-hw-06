"use strict";

// Напиши скрипт, который изменяет цвета фона элемента <body> 
// через инлайн стиль при клике на button.change - color и 
// выводит значение цвета в span.color.
var changeColorBtn = document.querySelector('.change-color');
var changeColorLabel = document.getElementsByClassName('color');

var onChangeColorBtnClick = function onChangeColorBtnClick(event) {
  var color = event.target.dataset.color;
  document.body.style.background = getRandomHexColor();
  changeColorLabel.textContent = getRandomHexColor();
  console.log(changeColorLabel);
};

changeColorBtn.addEventListener('click', onChangeColorBtnClick); // function onChangeColorBtnClick(event) {
//   document.body.style.background = event.color;

function getRandomHexColor() {
  return "#".concat(Math.floor(Math.random() * 16777215).toString(16));
}