// 5 задача:
// глобально: [[1,2],[3],[4,5]]
// 1-я функция: проверяет каждую строку матрицы (все элементы — числа).
// 2-я функция: объединяет матрицу в один массив (вложенный цикл). - [1,2,3,4,5]

const arr = [[1, 2], [3], [4, 5]];

const isValid = (matrix) => {
    return matrix.every((el) => {
        for (let i = 0; i < el.length; i++) {
            return !isNaN(el[i]) ? true : false;
        }
    })
}

const arrAll = (matrix) => {
    const arr = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++)
            arr.push(matrix[i][j]);
    }
    return arr;
}

if (isValid(arr)) console.log(arrAll(arr));
else console.log(`error`);