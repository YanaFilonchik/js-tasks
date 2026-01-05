//  11. На входе str — строка. Реализуйте 2 функции: reverseStr() — возвращает 
// перевёрнутую строку, printReversed() — выводит перевёрнутую строку.

const obj = {
    str: prompt(),
    reverseSrt: function () {
        return this.str.split(``).reverse().join(``);
    },
    printReversedStr: function (resultStr) {
        console.log(resultStr);
    }
}

obj.printReversedStr(obj.reverseSrt());