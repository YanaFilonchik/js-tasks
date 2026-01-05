// 1. Создай функцию sayHello, которая выводит: Привет, <имя>.
// Сделай объект с полем name. Вызови функцию sayHello с помощью call, передав ей этот объект как this.


function sayHello() {
    console.log(`Привет, ${this.name}`);
}

const obj = {
    name: `Yana`,
}

sayHello.call(obj);