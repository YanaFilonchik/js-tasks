const arr = [4, 3, -2, 7];
let index = -1;
for (let i = 0; i < arr.length; i++){
    if(arr[i]>=0){
        continue;
    }
    index = i;
    break;
}
console.log(index);
