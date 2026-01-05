//  8. Вычислите сумму тех чисел массива, что являются палиндромами 
// Входные: [1, 2, 3, 4] → Результат: 10
//  Входные: [10, 20, 30] → Результат: 60

const arr = [1, 2, 3, 4];
let i = 0;
let sumArr = 0;


function sum() {
    if(i == arr.length) return;
    if(String(arr[i]).split(``).reverse().join(``) == String(arr[i])) 
        sumArr+= arr[i];
    i++;
    sum();
}

sum();
console.log(sumArr);
