//  7. Вычислить факториал числа используя рекурсию
//  Входные: 4 → Результат: 24
//  Входные: 5 → Результат: 120
//  Входные: 3 → Результат: 6

const number = 4;

function recurs(number){
    if(number == 0) return 1;
    return number * recurs(number-1);
}

const res = recurs(5);
console.log(res);