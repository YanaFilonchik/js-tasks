//  2. Навходеобъект.Необходимовывестивсеключи
//  , которыеявляются числами.
//  Входные: {"1": "a", "2": "b", "name": "c"} → Результат: ["1", "2"]

const obj = {
    "1": "a",
    "2": "b",
    "name": "c"
}
const res = [];
for (const key in obj) {
    if(isNaN(key)) continue;
    res.push(key)
}
console.log(res);
