// Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.

let array = [5, 2, 3, 4, 5, 6];
for (let i = 0, sum = 0; i < array.length; i++) {
    sum += array[i];
    if(sum > 10){
        console.log(i + 1);
        break;
    }
}