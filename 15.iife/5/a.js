//  5. Напишите IIFE-функцию, принимающую массив строк и число. Внутри выведите 
// строки длиной больше указанного числа. 
// ["cat", "dinosaur", "elephant", "dog"], 3 // Ожидаемый вывод: [dinosaur, elephant]


(function (arr, n) {
    const res = arr.filter((el) =>  el.length > 3 ? true : false )
    console.log(res);
})(["cat", "dinosaur", "elephant", "dog"], 3)