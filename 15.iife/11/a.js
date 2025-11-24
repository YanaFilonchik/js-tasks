// 11. Найти и вывести наибольшее число

function newArr() {
    const n = +prompt();
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(+prompt());
    }
    return arr;
}

const maxNumber = (arr) => arr.reduce((mid, el) => el > mid ? el : mid, -Infinity);

console.log(maxNumber(newArr()));
