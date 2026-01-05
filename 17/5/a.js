//  5. Создай greaterThan(x)(y), которая проверяет, больше ли y, чем x.

function greaterThan(x) {
    return function (y) {
        return y > x ? true : false;
    }
}

console.log(greaterThan(74)(82));
console.log(greaterThan(4)(2));