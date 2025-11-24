// 6. Выведитевсечисла,кратные5или3,измассива[2, 5,9,15, 0, 4].

const arr = [2, 5, 9, 15, 0, 4];
const res = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 5 == 0 || arr[i] % 3 == 0)
        res.push(arr[i]);
}
console.log(res);
