// Дан массив [1, 2, 3, 4, 5]. 
// С помощью метода splice запишите в новый массив элементы [2, 3, 4]
let a = [1, 2, 3, 4, 5];
a.splice(0, 1);
a.splice(3, 1);
console.log(a);