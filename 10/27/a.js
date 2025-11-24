//  27. На входе n– количество элементов массива, затем пользователь заполняет массив с клавиатуры.
//  Создать новыймассив,содержащийстрокидлинойменее5символов.Использоватьметодfilter.
//  Входные: ["apple", "banana", "cat"] → Результат: ["cat"]
//  Входные: ["dog", "cat", "apple"] → Результат: ["dog", "cat"]
//  Входные: ["hschool", "company"] → Результат: []

/* const n = +prompt();
const arr = [];
for (let i = 0; i < n; i++) {
    arr.push(promt());
} */

const arr = ["dog", "cat", "apple"];
const res = arr.filter(function (el) {
    return el.length < 5 ? true : false;
})
console.log(res);