// 6. На входе n – количество элементов массива. Далее производится заполнение массива с 
// клавиатуры. Реализуйте 2 функции. Первая для формирования массива. Вторая для нахождения 
// количества элементов массива

const n = +prompt();
function newArr() {
    const arr = [];
    for(let i=0;i<n;i++){
        arr.push(prompt());
    }
    return arr;
}

function numArr(arr) {
    return arr.reduce(function (mid, el){
        return mid+=1;
    },0)
}

const arr = newArr();
console.log(numArr(arr));