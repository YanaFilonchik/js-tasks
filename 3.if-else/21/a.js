const a = +prompt();
const b = +prompt();
const c = +prompt();

const d = Math.pow(b, 2) - 4 * a * c;
if (d > 0) {
    const x1 = (-b - Math.sqrt(d))/ 2*a;
    const x2 = (-b + Math.sqrt(d))/ 2*a;
    console.log('Результат: ', x1, x2);
} else if (d == 0) {
    console.log('Результат: ', -b/(2*a));
} else {
    console.log('не имеет действительных корней');
} 