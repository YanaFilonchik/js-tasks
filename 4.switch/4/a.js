const a = prompt();

if (isNaN(a)) {
    console.log('Вы ввели не число!');
} else if (a > 0) {
    console.log('Число ', a, ' положительное');
} else {
    console.log('Число ', a, ' отрицательное');
}


isNaN(a) ? console.log('Вы ввели не число!') : a > 0 ? console.log('Число ', a, ' положительное') : console.log('Число ', a, ' отрицательное');