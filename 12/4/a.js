// 4. Дан объект с оценками студентов (например, { Анна: 95, Иван: 88, Мария: 92 }) и число n
// минимальная оценка. С помощью Object.values() и filter() выберите оценки, которые выше n,
//  ивыведите их.

const obj = { Анна: 95, Иван: 88, Мария: 92 };
const min = 90;
const arr = Object.values(obj);
const res = arr.filter(function (el) {
    return min<el? true : false;
})
console.log(res);

