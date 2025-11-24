//  3. Напишите IIFE-функцию, принимающую массив чисел и число. Внутри функции 
// выведите в console.log количество чисел больше заданного. 
// [1, 5, 10, 20, 30], 10 // Ожидаемый вывод: 2

(function (arr, number) {
    const res = arr.reduce(function (mid, el) {
        return el > number ? mid += 1 : mid;
    }, 0);
    console.log(res);
})([1, 5, 10, 20, 30], 10)