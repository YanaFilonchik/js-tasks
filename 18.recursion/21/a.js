// Написать рекурсивную функцию, которая выводит числа от 0 до 10.

let i = 0;
function number() {
    if (i === 11) return;
    console.log(i++);
    return number();
}

number();