// 3. Реализуйте класс WordString, который будет иметь следующие методы: метод reverseString, 
// переворачивающий строку, метод upperFirst, возвращающий строку, где первая буква заглавная и 
// метод upperEvery, который делает заглавной первую букву каждого слова этой строки.

class WordString {
    str = `asdasd sfedfs sfdewwwwww`;
    reverseString() {
        let resStr = this.str.split(``).reverse().join(``);
        console.log(resStr);
    }
    upperFirst() {
        let resStr = this.str[0].toUpperCase() + this.str.slice(1);
        console.log(resStr);
    }
    upperEvery() {
        let resStr = ``;
        const arrStr = this.str.split(` `);
        arrStr.forEach(el => {
            resStr += el[0].toUpperCase() + el.slice(1) + ` `;
        });
        console.log(resStr);

    }
}

wordString = new WordString();
wordString.reverseString();
wordString.upperFirst();
wordString.upperEvery();