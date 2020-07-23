//  Заполните массив 10-ю случайными целыми числами. 

let array = [];

for( let i = 0; i < 10; i++){
    array[i] = Math.floor( Math.random() * (100 - 1 + 1) + 1);
    console.log(array[i]);
}