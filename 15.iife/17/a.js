//  17. Вывести для каждого объекта в массиве разницу между max и min в массиве 
// чисел
//  [10, 2, 5, 3, 7] // 8


function resElement(array) {
    let max = array[0];
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
            continue;
        }
        if (min > array[i]) min = array[i];
    }
    return max-min;
}

const result = resElement([10, 2, 5, 3, 7]);
console.log(result);
