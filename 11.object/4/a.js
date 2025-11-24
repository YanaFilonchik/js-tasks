//  4. Навходеобъект.Необходимовывестивсезначения
//  , которыеявляются четнымичислами.
//  Входные: {"a": 1, "b": 2, "c": 4} → Результат: [2, 4]

const obj = { "a": 1, "b": 2, "c": 4 };
const res = [];
for (const key in obj) {
    if (obj[key] % 2 != 0) continue;
    res.push(obj[key]);
}
console.log(res);