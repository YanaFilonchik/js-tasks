// 10. На вход подается массив чисел. Найти количество уникальных элементов в массиве.
// Добавить проверку наввод (всеэлементы должныбыть числами).
// [1, 2, 2, 3, 4, 4, 5]-> 5
// (уникальные элементы: 1, 2, 3, 4, 5)



function unikArrCount(arr) {
    try {
        let count = 0;
        const arrUnik = [];
        for (let i = 0; i < arr.length; i++) {
            if (isNaN(arr[i])) throw new Error(`не число`);
            if (!arrUnik.includes(arr[i])) {
                arrUnik.push(arr[i]);
                count++;
            }
        }
        return count;
    } catch (error) {
        console.log(error);
    }
}

const arr = [1, 2, 2, 3, 4, 4, 5];
const res = unikArrCount(arr);
console.log(res);