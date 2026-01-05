//  12. На входе вложенный список, посчитайте количество всех чисел используя рекурсию
//  Входные: [1, [2, [3]], 4] → Результат: 4

const arr = [1, [2, [3]], 4];

let count = 0;

function countArr(arr){
    if(!arr.length) return;
    count++;
    countArr(arr.slice(1));
}

countArr(arr.flat(3));
console.log(count);