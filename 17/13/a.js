// 8. Создай функцию makeMultiplier(x), которая возвращает функцию умножения на x.

function makeMultiplier(x){
    return function(y){
        console.log(x*y);  
    }
}

const times2 = makeMultiplier(5);
times2(2);