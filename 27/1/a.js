// 1.
// Создайте класс Rectangle, который будет иметь свойства width и height. Напишите метод getArea(), 
// которыйвозвращаетплощадьпрямоугольника.
// Входные: Rectangle(5, 10) → Результат: 50
// Входные: Rectangle(3, 7) → Результат: 21
// Входные: Rectangle(6, 9) → Результат: 54


//1
/* class Rectangle {
    width = undefined;
    height = undefined;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        console.log(this.width * this.height);
    }
}

new Rectangle(5, 10).getArea(); */

//2
/* class Rectangle {
    width = undefined;
    height = undefined;
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.getArea();
    }

    getArea() {
        console.log(this.width * this.height);
    }
}

new Rectangle(5, 10); */

//3
/* class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

const rectangle = new Rectangle(5, 10);
console.log(rectangle.getArea()); */

//4
class Rectangle {
    getArea(width, height) {
        console.log(width * height);
    }
}

new Rectangle().getArea(5, 10);