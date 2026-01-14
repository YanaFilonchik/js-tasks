// 3. *Реализуйте класс CommonPrefix, который будет принимать массив строк. В классе должен быть
// метод findLongestPrefix(), который возвращает самый длинный общий префикс среди всех строк в
// массиве. Если общегопрефиксанет, методвозвращаетпустуюстроку.
// Входные: new CommonPrefix(["flower", "flow", "flight"]) → Результат: "fl"
// Входные: new CommonPrefix(["dog", "racecar", "car"]) → Результат: ""
// Входные: new CommonPrefix(["interview", "interval", "internet"]) → Результат: "inte"

class CommonPrefix {
    constructor(arrStr) {
        this.str = arrStr;
    }
    findLongestPrefix() {
        let n = 0;
        let res = ``;
        let resPrefix = ``;
        while (n < this.str[0].length) {

            for (let i = 1; i < this.str.length; i++) {
                if (!this.str[i].includes(res + this.str[0][n], 0)) {
                    return res;
                }  
            }

            res += this.str[0][n];
            n++;
        }
        return res;
    }
}

const commonPrefix = new CommonPrefix(["flower", "flow", "flight"]);
const commonPrefix1 = new CommonPrefix(["dog", "racecar", "car"]);
const commonPrefix2 = new CommonPrefix(["interview", "interval", "internet"]);
console.log(commonPrefix.findLongestPrefix());
console.log(commonPrefix1.findLongestPrefix());
console.log(commonPrefix2.findLongestPrefix());
