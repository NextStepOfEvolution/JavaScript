// Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.

let array = [1, 2, 3, 4, 5], temp = [];
for(let i = array.length - 1; i >= 0; i--){
    temp.push(array[i]);
}
array = temp;
console.log(array);
