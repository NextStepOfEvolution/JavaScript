// Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].

function arrayFill(str, n){
    let array = [];
    for( let i = 0; i < n; i++){
        array.push(str);
    }    
    return array;
}

console.log(arrayFill("abc", 5));