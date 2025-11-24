// 2. Есть массив объектов с именем и возрастом.
// Сгруппируй студентов по возрасту в объект, где ключ — возраст, значение — массив имён.

// let students = [
//   { name: "Anna", age: 20 },
//   { name: "Maks", age: 21 },
//   { name: "Olya", age: 20 },
//   { name: "Dima", age: 22 }
// ];
// Ожидается: { 20: ["Anna", "Olya"], 21: ["Maks"], 22: ["Dima"] }

let students = [
    { name: "Anna", age: 20 },
    { name: "Maks", age: 21 },
    { name: "Olya", age: 20 },
    { name: "Dima", age: 22 }
];
const obj = {};
for (let i = 0; i < students.length; i++) {
    if (obj[students[i].age]) {
        obj[students[i].age].push(students[i].name);
    } else {
        obj[students[i].age] = [students[i].name];
    }
}
console.log(obj);
