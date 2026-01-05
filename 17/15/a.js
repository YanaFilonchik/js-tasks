// 7. greaterThanX(x) возвращает функцию, которая проверяет, больше ли переданное 
// значение x.

function greaterThanX(x) {
    return function (y) {
        console.log(y > x ? true : false);
    }
}

const isGreaterThan5 = greaterThanX(5);
isGreaterThan5(7);
isGreaterThan5(3);