// 6.
// 1-я Функция возвращает готовый массив вида [ { name: "Alice", grades: [85, 92, 78] }, { name: "Bob", grades: [90, 88, 95] }, { name: "Charlie", grades: [70, 75, 80] }, { name: "Diana", grades: [98, 94, 99] } ]
// 2-я Функция проверяет корректность: имя — строка, оценки — числа 1–100.
// 3-я Функция считает средний балл для каждого студента.
// 4-я Функция выводит всех студентов с средним баллом выше 8.

const newArr = () => [{ name: "Alice", grades: [85, 92, 78] }, { name: "Bob", grades: [90, 88, 95] }, { name: "Charlie", grades: [70, 75, 80] }, { name: "Diana", grades: [98, 94, 99] }];
const isValid = (arr) => {
    return arr.every((el) => {
        if (typeof el.name != `string`) return false;
        return el.grades.every(elem => elem >= 1 && elem <= 100 ? true : false);
    });
}

const sredMark = (arrMark) => arrMark.reduce((sum, el) => sum += el, 0) / arrMark.length;

function studentRes(arr, mark) {
    arr.forEach(el => {
        if (sredMark(el.grades) >= mark) console.log(el.name);
    });
}


const arr = newArr();
if (isValid(arr)) {
    studentRes(arr, 80);
}
else console.log(`error`);