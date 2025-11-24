//  12. *Выведитекаждый элементмассива[1, 2, 2, 3, 4, 4, 3, 4, 5] без повторений.
const arr = [1, 2, 2, 3, 4, 4, 3, 4, 5];
const res = [];
res.push(arr[0]);

for (let i = 1; i < arr.length; i++) {
    if (res.includes(arr[i])) continue;
    res.push(arr[i]);
}
console.log(res);