// 15. На входе n – количество элементов массива. Далее производится заполнение массива с 
// клавиатуры. Реализуйте 3 функции. Первая для формирования массива. Вторая для проверки, что 
// в массиве только числа. Третья для получения произведения всех элементов массива. Если 
// результат функции проверки – true, то вызывать новую функцию, возвращающую произведение 
// всех элементов массива

function arrNew() {
    const n = +prompt();
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(+prompt());
    }
    return arr;
}

const isValid = (arr) => arr.every((el) => !isNaN(el))

const arrSum = (arr) => arr.reduce((sum, el) => sum *= el, 1)

const arr = arrNew();
if (isValid(arr)) console.log(arrSum(arr));
else console.log(`error`);