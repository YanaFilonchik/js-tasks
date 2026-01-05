// 4. На входе строка s. Посчитайте количество символов 'a' с помощью рекурсии
//  Входные: "banana" → Результат: 3

const str = `banana`;
let i=0;
let res = 0;

function sumA (){
    if(i == str.length) return;
    if(str[i].toLowerCase() == `a`) res++;
    i++;
    sumA();
}

sumA();
console.log(res);