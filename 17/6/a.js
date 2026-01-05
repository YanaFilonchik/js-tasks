// 6. Создай функцию checkEven(label)(number), которая выводит label: true/false в 
// зависимости от чётности числа.

function checkEven() {
    let label = false;
    return function (number) {
        number % 2 == 0 ? label = true : label = false;
        return label;
    }
}

console.log(checkEven()(5));
