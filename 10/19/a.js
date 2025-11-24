//  19. На входе n– количество элементов массива, затем пользователь заполняет массив с клавиатуры.
//  Используяметодreduce, посчитатьколичествочисел в массиве.
//  Входные: [1, 'a', 3, 'b', 5] → Результат: 3
//  Входные: ['apple', 'banana', 'cherry'] → Результат: 0

// const n = +prompt();
// const arr = [];
// for (let i = 0; i < n; i++) {
//     arr.push(prompt());
// }

const arr = [1, 'a', 3, 'b', 5];
console.log(arr.reduce(function (m, el) {
    return !isNaN(el) ? m+1 : m;
}, 0));