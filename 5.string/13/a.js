const str = prompt();
switch (str) {
    case 'собака':
    case 'кошка':
        console.log("Млекопитающее");
        break;
    case 'попугай':
        console.log("Птица");
        break;
    case 'рыбка':
        console.log("Рыба");
        break;
    default:
        console.log('Соответствие не найдено!');
        break;
}