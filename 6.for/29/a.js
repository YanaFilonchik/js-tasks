const arr = [1, 5, 13, 21, 8, 7, 14];
let flag = false;
for (let i = 0; i < arr.length; i++) {
    if (+arr[i] % 7 == 0) {
        console.log(arr[i]);
        flag = true;
        break;
    }
}
if (flag == false) {
    console.log(`Not found`);
}