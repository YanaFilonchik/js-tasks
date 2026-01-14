// 9. Создайте родительский класс RandomNumberArrayGenerator, который будет генерировать массив
// случайных чисел с помощью метода generateArray(). Затем создайте дочерний класс MultipleFilter,
// который переопределяет метод generateArray() и оставляет в массиве только те числа, которые
// кратны 3или7.
// Входные: new MultipleFilter().generateArray() → Результат: [21, 14, 9] (может быть другим, так как числа
// случайные)
// Входные: new RandomNumberArrayGenerator().generateArray() → Результат: [13, 21, 8, 9, 14, 27] (может быть
// другим, так как числаслучайные)

class RandomNumberArrayGenerator {
    generateArray() {
        const arr = [];
        const n = Math.floor(Math.random()*10);
        console.log(n);
        
        for (let i = 0; i <= n; i++) {
            arr.push(Math.floor(Math.random()*n));
        }
        console.log(arr);
        return arr;
    }
}

class MultipleFilter extends RandomNumberArrayGenerator {
    generateArray() {
        const arrNum = super.generateArray();
        const resArr = arrNum.filter(el => (el % 3 == 0 || el % 7 == 0) ? true : false);
        console.log(resArr);
    }
}

new MultipleFilter().generateArray();