// 2. Напишите функцию, которая принимает строку состоящую из нескольких слов. Каждое нечетное 
// слово строки функция должна преобразовать в нижний регистр, все четные слова, соответственно, 
// в верхний
//  happy new year -> happy NEW year

//const arr = prompt().slice(` `);
const arr = `happy new year`;

function str(arr) {
    const arrStr = arr.split(` `);
    for (let i = 0; i < arrStr.length; i++) {
        if (i % 2 == 0) {
            arrStr[i] = arrStr[i].toLowerCase();
        } else {
            arrStr[i] = arrStr[i].toUpperCase();
        }
    }
    return arrStr.join(` `);
}

const res = str(arr);
console.log(res);