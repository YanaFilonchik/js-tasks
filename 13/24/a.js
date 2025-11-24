// 6 задача:
// глобально:  [ { name: "Alice", grades: [5, 4, 5] }, { name: "Bob", grades: [3, 4, 4] }, { name: "Charlie", grades: [5, 5, 5] } ];
// 1-я функция: проверяет что массив grades не пустой, что grades это числа, что все grades выше 2 и что name это строка
// 2-я функция: находит среднюю оценку между всеми студентами

// Alice: 5, 4, 5
// Bob: 3, 4, 4
// Charlie: 5, 5, 5

// Соберём все оценки:
// 5, 4, 5, 3, 4, 4, 5, 5, 5

// Теперь:
// Средняя: 40 / 9 ≈ 4.44

const obj = [{ name: "Alice", grades: [5, 4, 5] }, { name: "Bob", grades: [3, 4, 4] }, { name: "Charlie", grades: [5, 5, 5] }];

const isValid = (arr) => {
    return arr.every((el) => {
        for (let i = 0; i < el.grades.length; i++) {
            return typeof el[`name`] == `string` && el[`grades`][i] > 2 ? true : false;
        }
    })
}

const srednee = (array) => {
    let sum = 0;
    let n = 0;
    array.forEach(el => {
        const { grades } = el;
        for (let i = 0; i < grades.length; i++) {
            n++;
            sum += grades[i];
        }
    });
    return Math.floor((sum / n) * 100) / 100;
}
if (isValid(obj)) console.log(srednee(obj));
else console.log(`error`);