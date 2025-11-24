// 24. На входе n– количество элементов массива, затем пользователь заполняет массив с клавиатуры.
//  Проверить, содержитли массив хотя бы одно положительное число. Использовать метод some.
//  Входные: [1,-2,-3,-4] → Результат: true
//  Входные: [-1,-2,-3,-4] → Результат: false
//  Входные: [10,-10, 20] → Результат: true

/* const n = +prompt();
const arr = [];
let num = 0;
for (let i = 0; i < n; i++) {
    while (true) {
        num = +prompt();
        if (!isNaN(num)) break;
    }
    arr.push(num);
} */

const arr = [1, -2, -3, -4];

const res = arr.some(function (el) {
    return el > 0 ? true : false;
});
console.log(res);
