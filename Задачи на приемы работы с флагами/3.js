// Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. 
// Если есть - выведите 'да', а если нет - выведите 'нет'.
let array = [1, 2, 3, 3, 6, 7];
let flag = false;
for (let i = 0; i < array.length - 1; i++) {
    if (array[i] == array[i + 1]) {
        flag = true;
        break;
    }
}
console.log(flag);