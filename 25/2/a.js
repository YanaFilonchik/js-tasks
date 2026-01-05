// 2. Реализуйте класс Calculator, который будет хранить в себе 4 метода: сумма чисел, разность, 
// произведение, частное. 2 числа передаются в класс, далее вызываеются соответствующие 
// функции. Добавить проверки на ввод

class Calculator {
    number1 = undefined;
    number2 = undefined;

    sum() {
        console.log(this.number1 + this.number2);
    }

    rasn() {
        console.log(this.number1 - this.number2);
    }

    pow() {
        console.log(this.number1 * this.number2);
    }

    div() {
        console.log(this.number1 / this.number2);
    }

    constructor(number1, number2) {
        this.number1 = number1;
        this.number2 = number2;
    }
}

try {
    const number1 = 12;
    const number2 = 25;
    if (isNaN(number1) || isNaN(number2)) throw new Error(`не число`);
    const calculator = new Calculator(number1, number2);
    calculator.sum();
    calculator.rasn();
    calculator.pow();
    calculator.div();
}
catch (error) {
    console.log(error);
}
