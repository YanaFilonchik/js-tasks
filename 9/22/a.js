// 5. Есть массив массивов строк. Посчитать, сколько строк являются палиндромами (читаются одинаково с обеих сторон).
// arr = [
//   ["level", "apple"],
//   ["radar", "banana"]
// ]
// Результат: 2

const arr = [
    ["level", "apple"],
    ["radar", "banana"]
];
let sum =0;

for (let i = 0; i < arr.length; i++) {

    let j = 0;
    while (j<arr[i].length){
        if(arr[i][j] == arr[i][j].split(``).reverse().join(``)){
            sum++;
        }
        j++;
    }
}
console.log(sum);