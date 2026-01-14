// 5. Создайте класс Product. Добавьте проверку в классе Product, чтобы цена не могла быть меньше 
// нуля. Если значение некорректное — выбрасывайте ошибкуthrow new Error. Ошибку обработать 
// через try catch.

class Product {
    constructor(price) {
        this.price = this.validPrice(price);
    }

    validPrice(price) {
        try {
            if (price < 0) throw new Error(`цена меньше 0`);
            return price;
        } catch (error) {
            return error;
        }
    }
}

const product = new Product(-2);
console.log(product.price);