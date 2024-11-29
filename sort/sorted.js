// В Js есть метод sort, а есть аналог toSorted
// Sorted не изменяет исходный массив.

// Пример 1
const arr1 = [2, 3, 4, 5, 9, 1, 6, 7, 8];
arr1.sort((a, b) => a - b);

console.log(arr1)

const arr2 = [2, 3, 4, 5, 9, 1, 6, 7, 8];
arr2.toSorted((a, b) => a - b);

console.log(arr2)
