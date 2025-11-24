// 20. На входе n – количество элементов массива, затем пользователь заполняет массив с клавиатуры.
//  Используяметодreduce, объединитьвсестрокив массивеводнустроку,разделеннуюзапятыми.
//  Входные: ["apple", "banana", "cherry"] → Результат: "apple,banana,cherry"
//  Входные: ["red", "green", "blue"] → Результат: "red,green,blue"

// const n = +prompt();
// const arr = [];
// for (let i = 0; i < n; i++) {
//     arr.push(promt());
// }

const arr = ["apple", "banana", "cherry"];
const res = arr.reduce(function (s, el, i, arr) {
    if (i != arr.length - 1) {
        return s + el + `, `;
    } else {
        return s + el;
    }
}, ``);

console.log(res);