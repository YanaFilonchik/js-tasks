//  11.
//  На входе массив array. Реализуйте рекурсивный поиск элемента
//  Входные: [1, 2, 3, 4], 3 → Результат: True
//  Входные: [1, 2, 3, 4], 5 → Результат: False

const arr = [1, 2, 3, 4];
const n = 3;

function poisk(arr){
    if(!arr.length) return false;
    if(arr[0] == n) return true;
    return poisk(arr.slice(1));
}

console.log(poisk(arr));