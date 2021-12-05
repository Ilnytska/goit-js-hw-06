// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) 
// и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const refs = {
    rangeInput: document.querySelector('#font-size-control'),
    textBelongInput: document.querySelector('#text'),
}
refs.textBelongInput.style.fontSize = `${refs.rangeInput.value}px`;

const onRangeChange = (event) => {
    const { value } = event.target;
   
    refs.textBelongInput.style.fontSize = `${value}px`;
}

refs.rangeInput.addEventListener('input', onRangeChange);