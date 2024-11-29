// Метод filter() создаёт новый массив со всеми элементами,
// прошедшими проверку, задаваемую в передаваемой функции.

// Синтаксис
// const newArray = arr.filter(callback(element[, index[, array]])[, thisArg])


// Пример 1
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newArr = arr.filter((item) => {
  if (item > 5) {
    return true
  } else {
    return false
  }
});

// Пример 2
const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
const newArr = arr.filter((item) => item !== 'a');

// В фильтр callback можно передавать отдельной функцией
const isEven = (num) => num % 2 === 0;
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const onlyEvenNumbers = arr.filter(isEven);
