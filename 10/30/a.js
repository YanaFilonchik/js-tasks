//  30. На входе n– количество элементов массива, затем пользователь заполняет массив с клавиатуры.
//  Найти наименьшее число в массиве. Если в массиве нет чисел, вывести "Нет чисел". Использовать
//  метод reduce.
//  Входные: [10, 3, 5, 7] → Результат: 3
//  Входные: ["apple", "banana", "cherry"] → Результат: "Нет чисел"
//  Входные: [50, 20, 30] → Результат: 20

//const arr = [10, 3, 5, 7];
const arr = ["apple", "banana", "cherry"];
let flag = false;
const res = arr.reduce(function (min, el) {
    if (isNaN(el)) {
        return min;
    } else if (min == `#`) {
        min = el;
        flag = true;
    }
    return min < el ? min : el;
}, `#`);

if (flag == false) {
    console.log(`Нет чисел`);
} else {
    console.log(res);
}