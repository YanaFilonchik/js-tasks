const a = +prompt();
const b = +prompt();
const c = +prompt();

if (isNaN(a) && isNaN(b) && isNaN(c)) {
    console.log('Вы ввели не число!');
} else {
    if (a + b > c && a + c > b && b + c > a) {
        if (a === b && a === c) {
            console.log('Равносторонний треугольник');
        } else if (a === b || a === c || b === c) {
            console.log('Равнобедренный треугольник');
        } else {
            console.log('Разносторонний треугольник');
        }
    } else {
        console.log('Треугольник не существует');
    }
}
