// 15. Функция принимает массив чисел и порог. Выводит только те числа, у которых 
// сумма цифр больше порога.
//  [12, 49, 123, 88, 305], 10); // Ожидаемый вывод: 49, 123, 88

function sumNumber(number) {
    let sum = 0;
    let strNumber = String(number).split(``);
    for (let i = 0; i < strNumber.length; i++) {
        sum += +strNumber[i];
    }
    return sum;
}

function resArr(arr, porog) {
    return arr.filter(el => sumNumber(el) > porog ? true : false);
}


console.log(resArr([12, 49, 123, 88, 305], 10));
