// 9. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве только числа. Вторая 
// для получения массива с удвоеннымизначенями каждого элемента. Если результат функции 
// проверки –true, то вызывать новую функцию, возвращающую массив с удвоенными элементами

function isValid(arr) {
    return arr.every(function (el) {
        return !isNaN(el);
    })
}

function sumPowArr(arr) {
    return arr.map(function (el) {
        return el * 2;
    })
}

const arr = [5, 8, 6, 4, 3, 2];
if(isValid(arr)) console.log(sumPowArr(arr));
else console.log(`error`);