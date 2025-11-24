let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let res = ``;
for (let i = 0; i < arr.length; i++) {
    res = ``;
    for (let j = arr[i].length-1; j >= 0; j--){
        res+=arr[i][j];
    }
    console.log(res);
}