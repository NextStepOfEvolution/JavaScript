// Преобразуйте строку 'var_test_text' в 'varTestText'. 
// Скрипт, конечно же, должен работать с любыми аналогичными строками.
let str = 'var_test_text';
let array = str.split("_"); 
for(let i = 1; i < array.length; i++){
    array[i] = array[i].split("");
    array[i][0] = array[i][0].toUpperCase();
    array[i] = array[i].join("");
}
str = array.join("");
console.log(str);