// 8. На входе n — число. Реализуйте 2 функции: pow() — возводит число в степень 2, 
// printPow() — выводит результат. 

const obj = {
    n: +prompt(),
    res: 0,
    pow: function () {
        return this.n ** 2;
    },
    printPow: function (res) {
        console.log(res);
    }
}

obj.printPow(obj.pow());
