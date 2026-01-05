// 8. Реализуйте функцию, которая находит наименьшее общее кратное (НОК) двух чисел.
// Добавить проверку наввод (вводимые значениядолжныбытьцелымичислами).
// Пример:
// НОК(6, 8)-> 24

function nok(num1, num2) {
    try {
        if (!Number.isInteger(num1) || !Number.isInteger(num2)) throw new Error(`Не все числа целые`);
        let c = num1;
        let d = num2;
        while (num1 != num2) {
            if (num1 > num2) {
                num1 = num1 - num2;
            } else {
                num2 = num2 - num1;
            }
        }
        return c / num1 * d;
    } catch (error) {
        console.log(error);
    }
}

const res = nok(6,8);
console.log(res);