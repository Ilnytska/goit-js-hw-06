// Напиши скрипт, который при потере фокуса на инпуте (событие blur), 
// проверяет его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, 
// если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, 
// которые мы уже добавили в исходные файлы задания.

const input = document.querySelector('#validation-input');
const inputDataLength = input.getAttribute('data-length');

input.addEventListener('blur', onInputBlur);

function onInputBlur() {
    input.classList.add('invalid')
    input.value.length === Number(inputDataLength)
        ? input.classList.replace('invalid','valid')
        : input.classList.replace('valid','invalid')

}
