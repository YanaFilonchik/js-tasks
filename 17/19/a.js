// 3. IIFE. Выведи массив чётных чисел от 0 до N.

(function () {
    const n = +prompt();
    const arr = [];
    for (let i = 0; i < n; i++) {
        if(i%2==0) arr.push(i);
    }
    console.log(arr);
})()