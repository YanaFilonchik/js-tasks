//  7. Объект с полем M и методом countEvens, который считает и выводит количество 
// чётных чисел от 1 до M.

const obj = {
    m: 24,
    countEvens: function () {
        let res = 0;
        for (let i = 1; i <= this.m; i++){
            if(i%2==0) res++;
        }
        console.log(res);
    }
}

obj.countEvens();