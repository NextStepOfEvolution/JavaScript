// Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. 
// Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным

let array = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]],
    sum = 0;

for(let i = 0; i < array[0].length; i++){
    for(let j = 0; j < array[i].length; j++){
        for(let k = 0; k < array[j].length; k++){
            sum += array[i][j][k];
        }
    }
}

console.log(sum);