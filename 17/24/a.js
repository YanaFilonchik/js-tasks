// 8. Сделай каррированную функцию, выводящую квадраты от start до end.
// rangeSquares(3)(5); // 👉 9 16 25

function rangeSquares(start){
    return function(end){
        let arrRes = [];
        for(let i=start;i<=end;i++){
            arrRes.push(i**2);
        }
        console.log(arrRes);
    }
}

rangeSquares(3)(5);