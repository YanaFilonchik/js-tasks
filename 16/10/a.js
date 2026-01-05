// 9. На входе n — число. Реализуйте 2 функции: isEven() — возвращает true/false, 
// printEvenCheck() — выводит, чётное ли число.

const obj = {
    n: +prompt(),
    isEvent: function () {
        return !isNaN(this.n) ? true : false;
    },
    printEventCheck: function (res){
        console.log(res);
    }
}

obj.printEventCheck(obj.isEvent());