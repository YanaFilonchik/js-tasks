// 10. Вывести чётные числа из массива

function newArr() {
    const n = +prompt();
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(+prompt());
    }
    return arr;
}

const  chetnArr = (arr) => arr.filter(el=>el%2==0?true:false);

const arr = newArr();
console.log(chetnArr(arr));