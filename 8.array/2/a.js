//  2. Найдитепроизведениеэлементовмассива[2,3,4, 5].

const arr = [2, 3, 4, 5];
let res = 1;
for (let i = 0; i < arr.length; i++) { 
    res*=arr[i];
}
console.log(res);
