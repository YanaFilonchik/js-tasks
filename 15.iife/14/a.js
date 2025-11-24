// 14. Функция принимает строку и выводит все символы, которые встречаются в ней 
// только один раз.
//  "programming" // Вывод: p, o, a, i, n


function newObj(str) {
    const res = [];
    for (const el of str.split(``)) {
        if (obj[el]) {
            obj[el] += 1;
        }
        else obj[el] = 1;
    }

    for (const key in obj) {
        if (obj[key] == 1) res.push(key);
    }
    return res;
}


const obj = {};
console.log(newObj("programming"));