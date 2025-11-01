const n = +prompt();
if (isNaN(n)) {
    console.log('Введено не число!');
} else {
    switch (n) {
        case 1:
            console.log('Утро');
            break;
        case 2:
            console.log('День');
            break;
        case 3:
            console.log('Вечер');
            break;
        case 4:
            console.log('Ночь');
            break;
        default:
            console.log('Вне диапазона');
            break;

    }
}