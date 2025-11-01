const str = prompt();
const n = +prompt();
if (isNaN(n)) {
    console.log('Второй параметр не число!');
} else if (n < str.length) {
    console.log(str[n]);
} else {
    console.log('Индекс вне диапазона');

}