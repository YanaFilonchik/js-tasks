// 1.
// Реализуйте класс Singer, который будет иметь следующие свойства: name, surname. Также класс 
// должен иметь метод getAutograph, который будет выводить “{name} {surname), с наилучшими 
// пожеланиями”. 

class Singer {
    name;
    surname;
    getAutograph(){
        console.log(`${this.name} ${this.surname}, с наилучшими пожеланиями.`);
    }
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }
}

const singer = new Singer(`Иван`, `Иванович`);
singer.getAutograph();