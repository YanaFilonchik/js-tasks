// 2. Добавьте метод greet() в класс User первого задания, который выводит строку: "Привет, меня зовут 
// {name}".

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.greet();
    }

    greet(){
        console.log(`Привет, меня зовут ${this.name}`);
    }
}

const user = new User(`Yana`, 22);