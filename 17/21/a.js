// 5. Подсчёт количества согласных в строке. IIFE

(function () {
    const str = prompt();
    let counter = 0;
    for (let i = 0; i < str.length; i++){
        if(`qwrtpsdfghjklzxcvbnm`.includes(str[i])) counter++;
    }
    console.log(counter);
})()