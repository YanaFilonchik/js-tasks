const arr = [2, 3, 5, 1, 5];
const res = [];
let mas = 0;
for (let i = 0; i < arr.length; i++) {
    if (mas > arr[i]) continue;
    mas = arr[i];
}
for (let i = 0; i < arr.length; i++) {
    if (mas == arr[i]) {
        res.push(i);
    }
}
console.log(res);