// 1.
// Создайте класс User, содержащий свойства name и age. Задайте эти значения через конструктор.

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.show();
    }

    show(){
        console.log(`${this.name} ${this.age}`);
    }
}

const user = new User(`Yana`, 22);