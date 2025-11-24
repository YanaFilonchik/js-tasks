// 26. На входе n – количество элементов массива, затем пользователь заполняет массив с клавиатуры.
//  Вывестиtrue, если все строкив массивеимеютдлинуболее3символов.Использоватьметодevery.
//  Входные: ["apple", "banana", "cherry"] → Результат: true
//  Входные: ["dog", "cat", "apple"] → Результат: false
//  Входные: ["hschool", "company", "cherry"] → Результат: true

/* const n = +prompt();
const arr = [];
for (let i = 0; i < n; i++) {
    arr.push(promt());
} */

const arr = ["apple", "banana", "cherry"];
const res = arr.every(function (el) {
    return el.length > 3 ? true : false;
});
console.log(res);