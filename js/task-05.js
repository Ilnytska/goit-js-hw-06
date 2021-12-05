// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
// подставляет его текущее значение в span#name - output.Если инпут пустой, 
// в спане должна отображаться строка "Anonymous".

const refs = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    if (event.currentTarget.value !== "") {
        refs.output.textContent = event.currentTarget.value;
    } else {
        refs.output.textContent = "Anonymous"
    }
}