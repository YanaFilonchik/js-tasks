//  9. Дан массив. Выведи только положительные числа, используя continue.
//  Ввод: [1, -3, 5, 0, -2, 7] → Вывод: 1 5 0 7

const arr = [1, -3, 5, 0, -2, 7];
for (let i = 0; i < arr.length; i++){
    if(arr[i]<0) continue;
    console.log(arr[i]);   
}