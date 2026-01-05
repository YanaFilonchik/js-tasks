// 7. Создай функцию isDivisibleBy(a)(b), которая проверяет, делится ли b на a без 
// остатка. 

function isDivisibleBy(a) {
    return function (b) {
        return b % a == 0 ? true : false;
    }
}

console.log(isDivisibleBy(47)(2));
