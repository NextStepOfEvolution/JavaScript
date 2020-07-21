// Дан массив с числами. Числа могут быть положительными и отрицательными. 
// Найдите сумму положительных элементов массива.

let array = [2, -5, 9, -15, 0, 4];
let result = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        result += array[i];
    }
}
console.log(result);