//  5. На входе число n = 2, step = 5. Возведите n в степень step используя рекурсию
//  Входные: 2, 5 → Результат: 32
//  Входные: 3, 4 → Результат: 81


const n = 2;
let step = 5;

function pow(){
    if(step == 0) return 1;
    step-=1;
    return n * pow();
}

const res = pow();
console.log(res);