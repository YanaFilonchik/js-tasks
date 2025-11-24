// 5. 
// 1-я функция: возвращает готовый массив объектов [ { name: "Alice", salary: 50000 }, { name: "Bob", salary: 62000 }, { name: "Charlie", salary: 48000 }, { name: "Diana", salary: 71000 } ]
// 2-я функция: проверяет salary (число > 0 и < 10_000).
// 3-я функция: находит сотрудника с максимальной зарплатой. reduce

const newArr = () => [{ name: "Alice", salary: 50000 }, { name: "Bob", salary: 62000 }, { name: "Charlie", salary: 48000 }, { name: "Diana", salary: 71000 }];

const isValidSalary = (arr) => arr.every((el) => el.salary > 0 && el.salary < 100000 ? true : false);

function maxSalary(arr) {
    return arr.reduce((mid, el) => {
        return mid < el[`salary`] ? mid = el[`salary`] : mid;
    }, -Infinity)
}

const arr = newArr();
if (isValidSalary(arr)) console.log(maxSalary(arr));
else console.log(`error`);