//  10. На входе n — число. Реализуйте 2 функции: factorial() — возвращает факториал 
// числа, printFactorial() — выводит факториал.

const obj = {
    n: +prompt(),
    factorial: function(){
        let res = 1;
        for(let i=1;i<=this.n;i++){
            res*=i;
        }
        return res;
    },
    printFactorial: function (result){
        console.log(result);
    }
}

obj.printFactorial(obj.factorial());