// 6. Умножение трёх чисел через каррирование

function powNumber(a){
    return function(b){
        return function(c){
            console.log(a*b*c);   
        }
    }
}

powNumber(2)(4)(2);