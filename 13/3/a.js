// 3. Напишите функцию, которая принимает строку в маленьком регистре и возаращает строку, где 
// каждое слово начинается с большого регистра
//  hschool company -> Hschool Company

const str = `hschool company`;
function newStr(str) {
    const arr = str.split(` `);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase()+ arr[i].slice(1);
    }
    return arr.join(` `);
}
const res = newStr(str);
console.log(res);