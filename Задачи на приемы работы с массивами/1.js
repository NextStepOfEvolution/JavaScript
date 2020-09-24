// Заполните массив следующим образом: в первый элемент запишите 'x', во второй 'xx', в третий 'xxx' и так далее.
let str = [];

for (let i = 0; i < 10; i++) {
    let temp = "";
    for (let j = 0; j <= i; j++) {
        temp += "x";
    }
    str.push(temp);
}
console.log(str);