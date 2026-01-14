// 7. Создайте родительский класс NumberGenerator, который будет генерировать и возвращать
// случайное число с помощью метода generateNumber(). Затем создайте дочерний класс
// SquareRootCalculator, который переопределяет метод generateNumber() и находит квадратный
// корень этогочисла безиспользованиявстроеннойфункцииMath.sqrt().
// Входные: new SquareRootCalculator().generateNumber() (предположим, сгенерированное число 16)→
// Результат: 4
// Входные: new SquareRootCalculator().generateNumber() (предположим, сгенерированное число 25) →
// Результат: 5


class NumberGenerator {
    number;
    generateNumber(){
        this.number = Math.floor(Math.random()*100);
        console.log(`Сгенерировано: ${this.number}`);
        
    }
}

class SquareRootCalculator extends NumberGenerator{
    generateNumber(){
        super.generateNumber();
        console.log(`Результат: ${Math.sqrt(this.number)}`);
    }
}

new SquareRootCalculator().generateNumber();