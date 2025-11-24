// Дан массив чисел. Получить новый массив, где все нули в конце, а порядок ненулевых элементов сохранён.
// [0,1,0,3,12] → [1,3,12,0,0].
const arr = [0, 1, 0, 3, 12];
const arr1 = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        arr1.push(arr[i]);
    }
}

for (let i = 0; i <= (arr.length - arr1.length); i++) {
    arr1.push(0);
}

console.log(arr1);