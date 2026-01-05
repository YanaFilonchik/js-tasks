// 10. На входе строка s. Переверните строку рекурсивно 
// Входные: "hello" → Результат: "olleh“

const str = "hello";

function strReverse(str){
    if(!str.length) return ``;
    return str[str.length-1] + strReverse(str.slice(0,str.length-1));
}

console.log(strReverse(str));