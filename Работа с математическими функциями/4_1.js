// Даны числа 4, -2, 5, 19, -130, 0, 10. 
// Найдите минимальное и максимальное число.

let array = [4, -2, 5, 19, -130, 0, 10];

console.log("Min: " + Math.min.apply(null, array));
console.log("Max: " + Math.max.apply(null, array));