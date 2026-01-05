// 9. На вход подается массив чисел. Вернуть массив, в котором все отрицательные числа
// замененына0.Добавить проверку наввод(всеэлементы массива должныбытьчислами).
// [-1, 2,-3, 4]-> [0, 2, 0, 4]


function newArr(arr) {
    try {
        for (let i = 0; i < arr.length; i++) {
            if (isNaN(arr[i])) throw new Error(`Не число`);
            if (arr[i] < 0) arr[i] = 0;
        }
        return arr;
    } catch (error) {
        console.log(error);
    }

}

const arr = [-1, 2, -3, 4];
console.log(newArr(arr));