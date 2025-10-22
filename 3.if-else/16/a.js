const a = +prompt();

if (a >= 0 && a <=18){
    console.log('детство');
} else if (a >= 19 && a <= 40){
    console.log('молодость');
}else if (a >= 41 && a <= 100){
    console.log('зрелость');
} else{
    console.log('не корректный ввод');
}