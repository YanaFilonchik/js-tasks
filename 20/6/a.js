// 6. Реализуйте функцию, которая принимает массив чисел и возвращает индекс наибольшего
// числа. Если таких чисел несколько, вернуть индекс первого найденного.
// Добавить проверки наввод
// [1, 3, 7, 7, 5]-> 2

function maxElem(arr) {
    try {
        let maxEl = arr[0];
        let iMax = 0;
        arr.forEach((el, i) => {
            if (isNaN(el)) throw new Error(`Не число`);
            if (maxEl < el) {
                maxEl = el;
                iMax = i;
            }
        });
        return iMax;
    } catch (error) {
        console.log(error);
    }
}

const arr = [1, 9, 4, 5, 7];
const res = maxElem(arr);
console.log(res);