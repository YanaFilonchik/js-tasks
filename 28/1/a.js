// 1.
// Создайте класс Product, который будет иметь свойства name, price и quantity. Напишите метод
// getTotalCost(products), который принимает список продуктов и возвращает общую стоимость всех
// товаров в каталоге.
// Входные: Product("Apple", 2, 5) → Результат: 10
// Входные: Product("Orange", 3, 4)→ Результат: 12

class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}

function getTotalCost(products) {
    let sumRes = 0;
    for (let i = 0; i < products.length; i++) {
        sumRes+= products[i].price * products[i].quantity; 
    }
    return sumRes;
}

const product = new Product("Apple", 2, 5);
const resSum = getTotalCost([product]);
console.log(resSum);