// 8. Реализуй функцию inRange(min)(max)(value), которая выводит true, если значение 
// попадает в диапазон.

function isRange(min) {
    return function (max) {
        return function (value) {
            return value > min && value < max ? true : false;
        }
    }
}

const res = isRange(80)(120)(92);
console.log(res);
