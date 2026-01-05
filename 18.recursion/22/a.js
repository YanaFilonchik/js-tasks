// Рекурсивная функция должна вывести числа от 10 вниз до 0.

let counter = 10;
function number() {
    if (counter === -1) return;
    console.log(counter--);
    return number();
}

number();