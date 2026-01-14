// 8. Добавьте в класс Car поле speed= 0, метод drive(speed) для перезаписискорости и stop() для 
// остановки (скорость = 0).


class Car {
    speed = 0;

    drive(speed) {
        this.speed = speed;
    }

    stop() {
        this.speed = 0;
    }
}

const car = new Car();
console.log(car.speed);
car.drive(25);
console.log(car.speed);
car.stop();
console.log(car.speed);