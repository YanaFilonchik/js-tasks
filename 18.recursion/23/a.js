// Рекурсивная функция выводит только чётные числа до 10: 0, 2, 4, …, 10.

let i = 0;

function number() {
    if (i === 12) return;
    console.log(i);
    i+=2;
    return number();
}

number();