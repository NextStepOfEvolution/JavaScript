// Составьте массив дней недели. 
// С помощью цикла for выведите все дни недели, 
// а текущий день выведите курсивом. 
// Текущий день должен храниться в переменной day.

let array = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
let day = "Вторник";

for(let i = array.length - 2; i < array.length; i++){
    console.log(array[i]);
}