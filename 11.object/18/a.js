// 4. Создай объект, где ключ — буква, а значение — количество её повторений.

// let word = "banana";
// Ожидается: { b: 1, a: 3, n: 2 }

let word = "banana";
const obj = {};
for (let i = 0; i < word.length; i++) {
    if(obj[word[i]]){
        obj[word[i]] += 1;
    }else{
        obj[word[i]] = 1;
    }
}
console.log(obj);