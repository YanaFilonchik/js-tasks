// 4. Напишите функцию, которая принимает статичный массив строк. Необходимо отфильтровать 
// значения и оставить только те, где длина строк до 2 символов.
//  [“by”, “belarus”, “de”, “ru”, “germany”] -> [“by”, “de”, “ru”]

const str = [`by`, `belarus`, `de`, `ru`, `germany`];
function strNew(arrStr) {
    const res = [];
    for (let i = 0; i < arrStr.length; i++) {
        if (arrStr[i].length <= 2)
            res.push(arrStr[i]);
    }
    return res;
}
const res = strNew(str);
console.log(res);