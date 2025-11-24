//  16. Пользователь вводит массив чисел и одно дополнительное число. Используя оператор spread,
//  создайте новыймассив,вкоторомэточислодобавленов началомассива.
//  Входные: [2, 3, 4] и 1 → Результат: [1, 2, 3, 4]
//  Входные: [5, 6, 7] и 4 → Результат: [4, 5, 6, 7]

const arr = [];

for (let i = 0; i < 3; i++) {
    let num = ``;
    while (true) {
        num = +prompt();
        if (!isNaN(num)) break;
    }
    arr.push(num);
}

let n = 0;
while (true) {
    n = +prompt();
    if (!isNaN(n)) break;
}

const res =[n, ...arr];
console.log(res);

