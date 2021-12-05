// В HTML есть список категорий ul#categories.
// Напиши скрипт который:
// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, 
// найдет и выведет в консоль текст заголовка элемента(тега < h2 >) и
//  количество элементов в категории(всех вложенных в него < li >).

const itemEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemEl.length}`);
const arrayEl = [...itemEl]
  .map(
    categories => `Category: ${categories.querySelector('h2').textContent}
Elements: ${categories.querySelectorAll('li').length}`
  )
.join("\n");

console.log(arrayEl);



