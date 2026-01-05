// 3. Реализуй divideBy(x)(y), где x — делитель, y — делимое

function divideBy(x){
    return function(y){
        console.log(y/x);
    }
}

divideBy(25)(5);