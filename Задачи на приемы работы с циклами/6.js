// Нарисуйте пирамиду, как показано на рисунке, воспользовавшись циклом for:

// xx
// xxxx
// xxxxxx
// xxxxxxxx
// xxxxxxxxxx

for( let i = 0, str = "xx"; i < 5; i++){
    console.log(str);
    str += "xx";
}