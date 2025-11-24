let arr =  [[1, 2, 2],
            [3, 2, 1],
            [1, 1, 3]];

let res = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] == 1) {
            res++;
        }
    }
}
console.log(res);