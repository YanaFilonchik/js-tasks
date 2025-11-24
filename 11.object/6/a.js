// 6. Навходеобъект.Необходимоудвоитьвсезначения,которыеявляютсячислами.
//  Входные:{"x": 5, "y": 10, "z": "abc"} → Результат:{"x": 10, "y": 20, "z": "abc"}

const obj = {"x": 5, "y": 10, "z": "abc"};
for (const key in obj) {
    if(isNaN(obj[key])) continue;
    obj[key] *=2;
}
console.log(obj);