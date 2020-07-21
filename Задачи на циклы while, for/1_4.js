//  С помощью цикла найдите сумму чисел от 1 до 100.
{
    let i = 1, result = 0;
    while(i <= 100){
        result += i++;
    }
    console.log(result);
}
{
    let result = 0;
    for(let i = 0;i <= 100; i++){
        result += i;
    }
    console.log(result);
}