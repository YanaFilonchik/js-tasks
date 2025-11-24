//  4. Напишите IIFE-функцию, принимающую массив чисел и отображающуюих 
// среднее значение. 
// [4, 8, 10] // Ожидаемый вывод: 7.333...

(function(arr){
    const sum = arr.reduce(function (sum,el){
        return sum+=el;
    })
    console.log(sum/arr.length);  
})([4, 8, 10])