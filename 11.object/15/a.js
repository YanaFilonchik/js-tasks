// 1. Дана строка. Подсчитай, сколько раз встречается каждое слово, и выведи объект с частотами.

// let text = "apple banana apple orange banana apple";
// // Ожидается: { apple: 3, banana: 2, orange: 1 }


let text = "apple banana apple orange banana apple";
const arr = text.split(` `);
const obj = {};

arr.forEach(function (el) {
    if (obj[el]) {
        obj[el]++;
    }
    else {
        obj[el] = 1;
    }
})
console.log(obj);