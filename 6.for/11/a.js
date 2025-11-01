const arr = [5, 12, 7, 9, 14];
let max = 0;
for (let i = 0; i < arr.length; i++) {
    if (max < +arr[i]) {
        max = arr[i];
    }
}
console.log(max);
