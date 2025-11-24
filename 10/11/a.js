//  11.
//  На входе n– количество элементов массива, затем пользователь заполняет массив с клавиатуры.
//  Создать новый массив, где каждый элемент преобразуется в строку вида #name. Использовать
//  методы map и forEach.
//  Входные: ["hschool", "company"] → Результат: ["#hschool", "#company"]
//  Входные: ["apple", "banana"] → Результат: ["#apple", "#banana"]
//  Входные: ["car", "bike", "bus"] → Результат: ["#car", "#bike", "#bus"]

const arr = ["hschool", "company"];
const res = arr.map(function (el) {
    return `#` + el;
})
console.log(res);


const res1 = [];
arr.forEach(function (el) {
    res1.push(`#` + el);
})
console.log(res1);
