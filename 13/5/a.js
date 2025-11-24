//  5. На входе массив. Необходимо создать функцию проверки на то что в массиве только числа. 
// Функция возвращает true, если в массиве только числа и false в противном случае

function isValid(arr) {
    return arr.every(function (el) {
        return !isNaN(el);
    })
}

const arrNum = [4, 5, 4, 1];
const arrStr = [`www`, 5, 4, 1];
console.log(isValid(arrNum));
console.log(isValid(arrStr));