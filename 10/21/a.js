//  21. На входе n– количество элементов массива, затем пользователь заполняет массив с клавиатуры.
//  Используяметодreduce, найтимаксимальноечисловмассиве.
//  Входные: [3, 7, 2, 5] → Результат: 7
//  Входные: [1, 9, 8, 3] → Результат: 9
//  Входные: [4, 4, 4, 4] → Результат: 4

const n = +prompt();
const arr = [];
let num = 0;
for (let i = 0; i < n; i++) {
    while (true) {
        num = +prompt();
        if (!isNaN(num)) break;
    }
    arr.push(num);
}

const res = arr.reduce(function (max, el) {
    return max > el ? max : el;
}, 0);
console.log(res);