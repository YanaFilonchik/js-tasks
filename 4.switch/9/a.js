const a = +prompt();

if (isNaN(a)) {
    console.log('Вы ввели не число!');
} else {
    if(a===0){
        console.log('Обратного числа не существует');
    }else{
        console.log(1/a); 
    }
}