//  9. На входе число. Необходимо создать функцию, возвращающую факториал числа
//  4! = 1 * 2 * 3 * 4

function isValid(number) {
    return !isNaN(number);
}

function faktorial(number) {
    let res = 1;
    for (let i = 1; i <=number; i++) {
        res*=i;
    }
    return res;
}

const number = 4;
if(isValid(number)) console.log(faktorial(number));
else console.log(`error`);