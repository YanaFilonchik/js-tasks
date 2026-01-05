// 4. Реализуйте класс MathСalculation. В него передается число n – количество элементов массива. На 
// основании числа формируется динамический массив из n элементов внутри класса. Создать 
// функцию для подсчета всех четных чисел массива. Добавить проверки на ввод

class MathСalculation {
    n = undefined;
    arr = [];

    constructor(number) {
        this.n = number;
        for (let i = 0; i < this.n; i++) {
            this.arr.push(Math.floor(Math.random() * this.n));          
        }
    }

    chetSum() {
        let res = 0;
        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i] % 2 == 0) res += this.arr[i];
        }
        console.log(res);
    }
}

try {
    const number = 14;
    if (isNaN(number)) throw new Error(`не число`);
    const mathСalculation = new MathСalculation(number);
    mathСalculation.chetSum();
} catch (error) {
    console.log(error);
}