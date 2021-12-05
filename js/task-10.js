// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и нажимает кнопку Создать, 
// после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.
// Создай функцию createBoxes(amount), которая принимает один параметр - число. 
// Функция создает столько < div >, сколько указано в amount и добавляет их в div#boxes.
// Размеры самого первого < div > - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. 
// Используй готовую функцию getRandomHexColor для получения цвета.
// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

const refs = {
  create: document.querySelector('[data-create]'),
  destroy: document.querySelector('[data-destroy]'),
  input: document.querySelector('input'),
  container: document.querySelector('#boxes')
} 
refs.create.addEventListener('click', onCreateElement);
refs.destroy.addEventListener('click', destroyBoxes)
let elememtSize = 20;

function onCreateElement() {
  const currentValue = Number(refs.input.value);
  const fragment = document.createDocumentFragment();
  console.log(currentValue)
  destroyBoxes()
  for (let i = 0; i < currentValue; i += 1) {
    // createBoxes()
    const div = createBoxes()
    fragment.append(div);
  }
  refs.container.append(fragment)
  refs.input.value = '';
};

function createBoxes() {
  const box = document.createElement('div');
  elememtSize += 10;
  const boxStyle = box.style;
  boxStyle.width = elememtSize + 'px';
  boxStyle.height = elememtSize + 'px';
  boxStyle.marginBottom = 10 + 'px';
  boxStyle.background = getRandomHexColor();
  
  return box;
}
function destroyBoxes() {
  refs.container.innerHTML = '';
  elememtSize = 20;
}
function getRandomHexColor() {

  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
