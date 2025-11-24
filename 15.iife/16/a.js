// 16. Найти все числа-палиндромы в массиве
//  [121, 202, 345, 11, 99]); // 121, 202, 11, 99

function palindrom(number) {
    if (String(number) == String(number).split(``).reverse().join(``)) {
        return true;
    }
    else return false;
}

const resArr = (arr) => arr.filter(el=>palindrom(el));

const arr = [121, 202, 345, 11, 99];
console.log(resArr(arr));






// function resArr(arr){
//     const res =[];
//     for(let i=0;i<length;i++){
//         if(palindrom(arr[i])) res.push(arr[i]);
//     }
//     return res;
// }