// 8. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве только строки. 
// Вторая для получения суммы всех строчных элементов массива. Если результат функции 
// проверки –true, то вызывать новую функцию, возвращающую конкатенацию всех строчных 
// элементов массива

function isValid(arr) {
    return arr.every(function (el) {
        return isNaN(el);
    })
}

function sumStr(arr) {
    return arr.reduce(function (mid, el) {
        return mid + el;
    }, ``)
}

const arr = [`aaa`, `bbb`, `ccc`];
if(isValid(arr)) 
    console.log(sumStr(arr));
else 
    console.log(`error`);