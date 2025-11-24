let arr = [[1, -2, 3], [-4, 5, -6], [7, -8, 9]];
let res = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        if(arr[i][j]<0) res++;
    }
}
console.log(res);
