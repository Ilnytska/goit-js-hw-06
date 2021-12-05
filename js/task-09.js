// Напиши скрипт, который изменяет цвета фона элемента <body> 
// через инлайн стиль при клике на button.change - color и 
// выводит значение цвета в span.color.

const refs = {
  changeColorBtn: document.querySelector('.change-color'),
  changeColorLabel: document.querySelector('.color')
}

const onChangeColorBtnClick = () => {
  const color = getRandomHexColor()
  document.body.style.background = color;
  refs.changeColorLabel.textContent = color;
;
  console.log(changeColorLabel)
}
refs.changeColorBtn.addEventListener('click', onChangeColorBtnClick);

  
function getRandomHexColor() {
    
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
     
}




