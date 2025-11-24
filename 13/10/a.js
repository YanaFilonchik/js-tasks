// 10. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве только числа. Вторая 
// для получения только четных элементов массива. Если результат функции проверки – true, то 
// вызывать новую функцию, возвращающую массив с четными элементами массива

function isValid(arr) {
    return arr.every(function (el) {
        return !isNaN(el);
    })
}

function chetElemArr(arr) {
    return arr.filter(function (el) {
        return el % 2 == 0 ? true : false;
    })
}

const arr = [4, 7, 3, 8, 5, 6];
if(isValid(arr)) console.log(chetElemArr(arr));
else console.log(`error`);