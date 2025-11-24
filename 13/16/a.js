//  16. На входе n – количество элементов массива. Далее производится заполнение массива с 
// клавиатуры. Реализуйте 3 функции. Первая для формирования массива. Вторая для проверки, что 
// в массиве только числа. Третья для формирования массива из всех четных чисел, возведенных в 
// квадрат. Если результат функции проверки – true, то вызывать новую функцию, возвращающую 
// массив из всех четных чисел, возведенных в квадрат


function arrNew() {
    const n = +prompt();
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(+prompt());
    }
    return arr;
}

const isValid = (arr) => arr.every((el)=>!isNaN(el))

function arrPow(arr) {
    const newArr=[];
    arr.forEach(function (el,i) {
        if(i%2==0) newArr.push(el**2);
    });
    return newArr;
}

const arr=arrNew();
if(isValid(arr)) console.log(arrPow(arr));
else console.log(`error`);
