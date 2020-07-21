// Выведите столбец четных чисел в промежутке от 0 до 100.
{
    console.log("While");
    let i = 0;
    while(i <= 100){
        if( i % 2 == 0){
            console.log(i);
        }
        i++;
    }
}
{
    console.log("For");
    
    for(let i = 0; i <= 100; i++){
        if( i % 2 == 0){
            console.log(i);
        }
    }
}