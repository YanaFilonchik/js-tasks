// 27. Дана строка. Напишите программу, которая с помощью цикла for подсчитывает количество
//  согласных букв в строке. Согласные: b, c, d, f, g, h, j, k, l, m, n, p, q, r, s, t, v, w, x, y, z.
//  Входные: "AEIOU"
//  Результат: Количество согласных: 0

const arr = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
const str = prompt().toLowerCase();
let res = 0;
for (let i = 0; i < str.length; i++) {
    if (arr.includes(str[i])) {
        res++;
    }
}
console.log(`Количество согласных: ${res}`);