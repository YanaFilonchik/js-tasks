// 25. На входе n– количество элементов массива, затем пользователь заполняет массив с клавиатуры.
//  Создать новыймассив,состоящийиздлинстроквисходноммассиве.Использоватьметодmap.
//  Входные: ["apple", "banana", "cherry"] → Результат: [5, 6, 6]
//  Входные: ["dog", "cat"] → Результат: [3, 3]
//  Входные: ["hschool", "company"] → Результат: [7, 7]

/* const n = +prompt();
const arr = [];
for (let i = 0; i < n; i++) {
    arr.push(promt());
} */

const arr = ["apple", "banana", "cherry"];
const res = arr.map(function (el){
    return el.length;
});
console.log(res);