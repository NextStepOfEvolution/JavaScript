// Дан массив с элементами [1, 2, 3, 4, 5]. 
// С помощью цикла for найдите сумму элементов этого массива. 
// Запишите ее в переменную result.
let array =  [1, 2, 3, 4, 5], result = 0;
for(let i = 0; i < array.length; i++){
    result += array[i];
}
console.log(result);