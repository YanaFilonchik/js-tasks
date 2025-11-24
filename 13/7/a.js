// 7. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве только числа. Вторая 
// для получения суммы всех элементов массива. Если результат функции проверки – true, то 
// вызывать новую функцию, возвращающую сумму всех элементов массива

function inValid(arr) {
    return arr.every(function (el) {
        return !isNaN(el);
    })
}

function sumArr(arr) {
    return arr.reduce(function (sum, el) {
        return sum + el;
    }, 0)
}

const arr = [4, 7, 8, 10, 24];
if(inValid(arr)){
    console.log(sumArr(arr));
}
else{
    console.log(`error`);
}