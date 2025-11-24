// 18. На входе n– количество элементов массива, затем пользователь заполняет массив с клавиатуры.
//  Используяметодreduce, найтипроизведениевсехчиселвмассиве.
//  Входные: [2, 3, 4] → Результат: 24
//  Входные: [1, 5, 10] → Результат: 50

const n = +prompt();
const arr = [];
for (let i = 0; i < n; i++) {
    let num = 0;
    while (true) {
        num = +prompt();
        if (!isNaN(num)) break;
    }
    arr.push(num);
}

console.log(arr.reduce(function (m, el) {
    return m * el;
}, 1));
