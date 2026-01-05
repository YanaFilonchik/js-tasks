// 4. Найди факториал числа с помощью цикла внутри IIFE.

(function () {
    const number = +prompt();
    let factorial = 1;
    for (let i = 1; i <= number; i++){
        factorial*=i;
    }
    console.log(factorial);
})()