const day = +prompt();

if (day === 1) {
    console.log('Понедельник');
} else if (day === 2) {
    console.log('Вторник');
} else if (day === 3) {
    console.log('Среда');
} else if (day === 4) {
    console.log('Четверг');
} else if (day === 5) {
    console.log('Пятница');
} else if (day === 6) {
    console.log('Суббота');
} else if (day === 7) {
    console.log('Воскресенье');
}

switch (day) {
    case 1:
        console.log('Понедельник');
        break;
    case 2:
        console.log('Вторник');
        break;
    case 3:
        console.log('Среда');
        break;
    case 4:
        console.log('Четверг');
        break;
    case 5:
        console.log('Пятница');
        break;
    case 6:
        console.log('Суббота');
        break;
    case 7:
        console.log('Воскресенье');
        break;
    default:
        console.log('не день недели');
        break;
}