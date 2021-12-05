// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.
// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const refs = {
  btnIncrement: document.querySelector("[data-action='increment']"),
  btnDecrement: document.querySelector("[data-action='decrement']"),
  numberValue: document.querySelector("#value"),
}
let numberValue = 0;
const changeValue = (step) => {
    numberValue = numberValue + step;
refs.numberValue.textContent = numberValue;
};

refs.btnDecrement.addEventListener('click', () => changeValue(-1));
refs.btnIncrement.addEventListener('click', () => changeValue(+1));

