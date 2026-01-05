// 6. Объект с полем N и методом sumToN, который выводит сумму чисел от 1 до N.

const obj = {
    //  n: +prompt(),
    n: 20,
    sumToN: function () {
        let sum = 0;
        for (let i = 1; i <= +this.n; i++){
            sum+=i;
        }
        console.log(sum);
    }
}

obj.sumToN();