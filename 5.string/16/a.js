const a = +prompt();
if (isNaN(a)) {
    console.log('Не число');
} else if (a >= 10 && a <= 20) {
    console.log('В диапазоне');
} else{
    console.log('Вне диапазона');
}