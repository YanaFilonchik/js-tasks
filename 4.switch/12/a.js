const a = +prompt();
const b = +prompt();

if (isNaN(a) && isNaN(b)) {
    console.log('Вы ввели не число!');
} else {
    console.log('I\'m', a + b);
}