//  17. Написать функцию, принимающую в параметрах строку текста в маленьком регистре. Разбить 
// строку на массив. Функция должна вернуть строку, где каждый элемент массива в чередование 
// регистров toLowerCase, toUpperCase
//  hschool-> HsChOoL

function strNew(str) {
    const arrStr = str.split(``);
    for(let i = 0;i<arrStr.length;i++){
        if(i%2==0) arrStr[i]=arrStr[i].toUpperCase();
        else arrStr[i]=arrStr[i].toLowerCase();
    }
    return arrStr.join(``);
}

console.log(strNew(prompt().toLowerCase()));
