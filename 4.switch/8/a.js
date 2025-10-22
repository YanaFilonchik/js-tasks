const a = +prompt();

if (isNaN(a)) {
    console.log('Вы ввели не число!');
} else {
    switch (a) {
        case 1:
            console.log('Зима');
            break;
        case 2:
            console.log('Весна');
            break;
        case 3:
            console.log('Лето');
            break;
        case 4:
            console.log('Осень');
            break;
        default:
            break;
    }
}