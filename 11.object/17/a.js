// 3. Дан массив товаров. Нужно посчитать, сколько товаров в каждой категории.

// let products = [
//   { name: "Apple", category: "fruit" },
//   { name: "Banana", category: "fruit" },
//   { name: "Cucumber", category: "vegetable" },
//   { name: "Tomato", category: "vegetable" },
//   { name: "Bread", category: "bakery" }
// ];
// Ожидается: { fruit: 2, vegetable: 2, bakery: 1 }

let products = [
  { name: "Apple", category: "fruit" },
  { name: "Banana", category: "fruit" },
  { name: "Cucumber", category: "vegetable" },
  { name: "Tomato", category: "vegetable" },
  { name: "Bread", category: "bakery" }
];
const obj = {};
products.forEach(function (el){
    if(obj[el.category]){
        obj[el.category] +=1;
    }else{
        obj[el.category] = 1;
    }
})
console.log(obj);
