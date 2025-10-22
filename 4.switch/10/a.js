const a = +prompt();

if(isNaN(a)){
    console.log('Вы ввели не число!');
}else{
    console.log(Math.floor(a/100));
}