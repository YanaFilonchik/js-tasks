// 6. Создайте родительский класс Number, который будет хранить статичное число. Затем создайте
// дочерний класс SquareRootCalculator, который будет содержать метод calculateSquareRoot(),
// вычисляющийквадратныйкореньэтогочислабезиспользованиявстроеннойфункцииMath.sqrt().
// Входные: new SquareRootCalculator(16) → Результат: 4
// Входные: new SquareRootCalculator(25) → Результат: 5
// Входные: new SquareRootCalculator(1) → Результат: 1

class Number {
    constructor(num) {
        this.num = num;
    }
}

class SquareRootCalculator extends Number {
    constructor(num) {
        super(num);
    }

    calculateSquareRoot() {
        return Math.sqrt(this.num);
    }
}

const squareRootCalculator = new SquareRootCalculator(16);
console.log(squareRootCalculator.calculateSquareRoot());