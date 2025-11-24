//  12. Подсчитать количество положительных и отрицательных чисел

function newArr() {
    const n = +prompt();
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(+prompt());
    }
    return arr;
}

const isValid = (arr) => arr.every(el => !isNaN(el) ? true : false);


function polOtrCount(arr) {
    let pol = 0;
    let otr = 0;
    let i = 0;
    while (i < arr.length) {
        if (arr[i] > 0) pol++;
        else otr++;
        i++;
    }
    return [pol, otr]
}

const arr = newArr();
if(isValid(arr)){
    const res = polOtrCount(arr);
    console.log(`Положительных: ${res[0]}, отрицательных: ${res[1]}`);
}
else console.log(`error`);