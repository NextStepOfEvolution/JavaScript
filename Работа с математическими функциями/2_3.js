// Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. 
// Найдите квадратный корень из суммы кубов его элементов. 
// Для решения воспользуйтесь циклом for.

let array = [ 4, 2, 5, 19, 13, 0, 10 ], cub = 0;

for(let i = 0; i < array.length; i++){
    cub += Math.pow(array[i], 3);
}
console.log(Math.sqrt(cub));