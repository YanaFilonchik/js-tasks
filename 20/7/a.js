// 7. Навходподается строка. Необходимо удалить все гласные из строки. Добавить проверки на
// ввод строки (ввод должен быть строкой).
// "hello"-> "hll",
// "world"-> "wrld"

function newStr(str) {
    try {
        if(!isNaN(str)) throw new Error(`Число`);
        let strNew = ``;
        for (let i = 0; i < str.length; i++) {
            if (!`aeuio`.includes(str[i])) {
                strNew = strNew + str[i];
            }
        }
        return strNew;
    } catch (error) {
        console.log(error);
    }
}


const str = `hello`;
const res = newStr(str);
console.log(res);