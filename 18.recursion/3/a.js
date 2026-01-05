//  3. На входе число n. Вычислитесуммучисел от 1 до n используя рекурсию
//  Входные: 5 → Результат: 15
//  Входные: 3 → Результат: 6
//  Входные: 10 → Результат: 55

const n = 5;

function sum(number){
    if(number == 0) return 0;
    return number + sum(number-1);
}

const res = sum(5);
console.log(res);
