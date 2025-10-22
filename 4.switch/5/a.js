const a = +prompt();

const n = Math.sqrt(a);

if (isNaN(n)) {
    console.log('Вы ввели не число!');
} else {

    if (Number.isInteger(n)) {
        console.log(n);
    } else {
        console.log(Math.round(n));
    }
}

isNaN(n) ? console.log('Вы ввели не число!') : Number.isInteger(n) ? console.log(n) : console.log(Math.round(n));