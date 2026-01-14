// 5. Создайте родительский класс Number, который будет хранить число. Затем создайте дочерний
// класс PalindromeChecker, который будет проверять, является ли это числопалиндромом.
// Входные: new PalindromeChecker(-121) → Результат: false
// Входные: new PalindromeChecker(10) → Результат: false
// Входные: new PalindromeChecker(12321) → Результат: true


class Number {
    constructor(num) {
        this.num = num;
    }
}

class PalindromeChecker extends Number {
    constructor(num) {
        super(num);
        this.validPalindrom();
    }

    validPalindrom() {
        console.log(String(this.num).split(``).reverse().join(``) == this.num ? true : false);
    }
}

new PalindromeChecker(-121);
new PalindromeChecker(12321);