const a = +prompt();

if (isNaN(a)) {
    console.log('Вы ввели не число!');
} else {
    switch (a) {
        case 1:
            console.log('Очень плохо');
            break;
        case 2:
            console.log('Плохо');
            break;
        case 3:
            console.log('Удовлетворительно');
            break;
        case 4:
            console.log('Хорошо');
            break;
        case 5:
            console.log('Отлично');
            break;
        default:
            console.log('Некорректный ввод');
            break;
    }
}