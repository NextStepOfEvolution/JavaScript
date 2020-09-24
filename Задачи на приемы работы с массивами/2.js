// Заполните массив следующим образом: в первый элемент запишите '1', во второй '22', в третий '333' и так далее.

let str = [];

for (let i = 1; i < 10; i++) {
    let temp = "";
    for(let j = 0; j < i; j++){
        temp += i;
    }
    str.push(temp);
}
console.log(str);