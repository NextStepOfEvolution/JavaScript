// Дан массив с элементами 2, 5, 9, 15, 0, 4. 
// С помощью цикла for и оператора if выведите на экран столбец тех 
// элементов массива, которые больше 3-х, но меньше 10.

let array = [2, 5, 9, 15, 0, 4];
for (let i = 0; i < array.length; i++) {
    if (3 < array[i] && array[i] < 10) {
        console.log(array[i]);
    }
}