// 10. На входе строка. Необходимо создать функцию, возвращающую true, если это слово палиндром и 
// false в противном случае

function palindrom(str) {
    for (let i = 0, j = str.length - 1; i < (str.length / 2); i++, j--) {
        if (str[i] != str[j]) return false;
    }
    return true;
}

const str = `heleh`;
console.log(palindrom(str));