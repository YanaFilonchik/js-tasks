// 8. Создайте родительский класс NumberArrayGenerator, который будет генерировать массив чисел
// от 1 до 8 с помощью метода generateArray(). Затем создайте дочерний класс EvenNumberFilter,
// которыйпереопределяетметодgenerateArray() и оставляет в массиветолькочётные числа.
// Входные: new EvenNumberFilter().generateArray() → Результат: [2, 4, 6, 8]


class NumberArrayGenerator {
    arrNum;

    /* constructor() {
        this.arrNum = this.generateArray();
    } */

    generateArray() {
        const arr = [];
        for (let i = 1; i <= 8; i++) {
            arr.push(i);
        }
        return arr;
    }
}

class EvenNumberFilter extends NumberArrayGenerator {
    constructor() {
        this.arrNum = super.generateArray();
    }

    generateArray() {
        const resArr = this.arrNum.filter(el => el % 2 == 0 ? true : false);
        console.log(resArr);
    }
}

new EvenNumberFilter().generateArray();