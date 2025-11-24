//  9. Напишите IIFE-функцию, принимающую двумерный массив и выводящую сумму 
// всех его элементов. 
// [ [1, 2], [3, 4], [5, 6] ] // Ожидаемый вывод: 21

(function (matrix) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) 
        for (let j = 0; j < matrix[i].length; j++) 
            sum += matrix[i][j];
    console.log(sum);
})([[1, 2], [3, 4], [5, 6]])