// 14. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве только числа. Вторая 
// для поиска максимального значения в массиве. Если результат функции проверки – true, то 
// вызывать новую функцию, возвращающую максимальное значение массива


function arrNew() {
    const n = +prompt();
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(+prompt());
    }
    return arr;
}

const  isValid = (arr) => arr.every((el) => !isNaN(el))

const maxNumber = (arr) =>  arr.reduce((max, el) => max < el ? el : max , 0)

const arr = arrNew();
if(isValid(arr)) console.log(maxNumber(arr));
else console.log(`error`);
