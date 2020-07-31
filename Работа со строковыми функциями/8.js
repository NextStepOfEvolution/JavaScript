// Дана строка 'я учу javascript!'. 
// С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.
let str = 'я учу javascript!';
let array = str.split(" ");
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}