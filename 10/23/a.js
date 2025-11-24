//  23. На входе n– количество элементов массива, затем пользователь заполняет массив с клавиатуры.
//  Проверить, содержитли массивтолькочетныечисла.Использоватьметод every.
//  Входные: [2, 4, 6, 8] → Результат: true
//  Входные: [2, 3, 4, 6] → Результат: false
//  Входные: [4, 6, 8, 10] → Результат: true

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

const arr = [2, 4, 6, 8];

const res = arr.every(function (el){
    return el%2==0?true:false;
})
console.log(res);