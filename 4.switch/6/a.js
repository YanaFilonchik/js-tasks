const a = +prompt();
const b = +prompt();
const s = +prompt();

if (!isNaN(a) && !isNaN(b) && !isNaN(s)) {
    console.log(s / (a + b));
} else {
    console.log('Вы ввели не число!');
}

!isNaN(a) && !isNaN(b) && !isNaN(s) ? console.log(s / (a + b)) : console.log('Вы ввели не число!');