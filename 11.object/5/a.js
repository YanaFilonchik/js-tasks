// 5. На входе объект. Необходимо сформировать массив из всех ключей
//  числами.
//  Входные: {"1": "a", "3": "b", "4": "c"} → Результат: ["1", "3"]

const obj = { "1": "a", "3": "b", "4": "c" };
const res = [];
for (const key in obj) {
    if(isNaN(key)) continue;
    res.push(key);
}
console.log(res);
