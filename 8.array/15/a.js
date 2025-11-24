// Найти элементы, которые больше соседей слева и справа.
// [1, 3, 2, 4, 4, 5, 3] → [3, 5]

const arr = [1, 3, 2, 4, 4, 5, 3];
const res = [];

for (let i = 1; i < arr.length - 1; i++){
    if(arr[i-1]<arr[i]&& arr[i]>arr[i+1]){
        res.push(arr[i]);
    }
}
console.log(res);