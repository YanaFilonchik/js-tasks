// 3. Навходеобъект.Необходимовывестивсезначения
//  Входные: {"a": 1, "b": "2", "c": 3} → Результат: [1, 2, 3]

const obj = {"a": 1, "b": "2", "c": 3};
const res = [];
for (const key in obj) {
   res.push(obj[key]);
}
console.log(res);