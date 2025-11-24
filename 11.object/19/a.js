// 5. Даны два массива объектов — пользователи и их заказы.
// Собери объект, где ключ — имя пользователя, а значение — массив его заказов.
// let users = [
//   { id: 1, name: "Anna" },
//   { id: 2, name: "Maks" }
// ];

// let orders = [
//   { userId: 1, item: "Book" },
//   { userId: 2, item: "Phone" },
//   { userId: 1, item: "Pen" }
// ];
// Ожидается: { Anna: ["Book", "Pen"], Maks: ["Phone"] }

let users = [
    { id: 1, name: "Anna" },
    { id: 2, name: "Maks" }
];

let orders = [
    { userId: 1, item: "Book" },
    { userId: 2, item: "Phone" },
    { userId: 1, item: "Pen" }
];

const obj = {};
users.forEach(function (el) {
    for (let i = 0; i < orders.length; i++){
        if(el.id == orders[i].userId){
            console.log(orders[i].userId);
        }else{
           //obj[el.name] = [el[i].i] 
        }
    }
})