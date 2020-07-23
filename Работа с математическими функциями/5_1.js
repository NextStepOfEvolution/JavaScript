//  Выведите на экран случайное целое число от 1 до 100.
 
let min = 1, max = 100;
console.log( Math.floor( Math.random() * (max - min + 1) + min));