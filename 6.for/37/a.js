//const arr = [1, 3, 5, 6, 9];
//const arr = [2, 4, 9];
const arr = [3, 6, 9] ;
let res = 0;
let k = 0;
for (let i = 0; i < arr.length && k < 2; i++) {
    if (arr[i] % 3 == 0) {
        res = +arr[i];
        k++;
    }
}
if (res == 0 || k == 1) {
    console.log(`Not found`);
}else{
    console.log(res);
}
