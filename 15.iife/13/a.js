// 13. Создайте функцию, которая принимает массив строк и выводит, сколько слов 
// имеют длину 3 или4 и т.д.
//  ["cat", "lion", "dog", "elephant", "bat", "fox", "wolf", "bee"]); // Вывод: 7

const sumStr =(arr) => arr.reduce((sum, el) => (el.length == 3 || el.length == 4) ? sum += 1 : sum , 0);

console.log(sumStr(["cat", "lion", "dog", "elephant", "bat", "fox", "wolf", "bee"]));