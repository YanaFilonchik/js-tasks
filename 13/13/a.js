// 13. На входе строка. Необходимо создать функцию, возвращающую true, если это слово анаграмма и 
// false в противном случае



function arrStr() {
    const arr = [];
    for (let i = 0; i < 2; i++) {
        arr.push(prompt());
    }
    return arr;
}

const isValid = (arrStr) => arrStr.every( (el) => isNaN(el))


function strAnagram(arr) {
    const str1 = arr[0];
    const str2 = arr[1];
    if(str1.split(``).sort().join(``) == str2.split(``).sort().join(``)){
        return true;
    }else{
        return false;
    }
}

const arr = arrStr();
if(isValid(arr)){
    console.log(strAnagram(arr));
}
else console.log(`error`);
