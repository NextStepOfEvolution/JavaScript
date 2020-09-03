// Дан массив с числами. Проверьте, что в этом массиве есть число 5. Если есть - выведите 'да', 
// а если нет - выведите 'нет'.
let array = [1, 2, 3, 6, 7];
let flag = false;
for (let a in array) {
    if (a == 5){
        flag = true;
        break;
    }
}
if (flag) {
    console.log("Да");
} else {
    console.log("Нет");
}