// 6. На входе массив array. Посчитайтеколичество элементов массива используя рекурсию
//  Входные: [1, 2, 3, 4] → Результат: 4
//  Входные: [10, 20, 30] → Результат: 3

const arr = [1, 2, 3, 4];
let i=0;

function sumElem(arr){
    if(!arr.length) return;
    i++;
    sumElem(arr.slice(1));
}

sumElem(arr);
console.log(i);