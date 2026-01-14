// 4. СоздайтеклассTwoSum, которыйбудетпринимать массивцелых чиселnumsицелоечислоtarget.
// Реализуйте метод findIndices(), который возвращает индексы двух чисел, сумма которых равна
// target. Гарантируется, что существует ровно одно решение, и вы не можете использовать один и
// тот жеэлементдважды.
// Условия:
// • Массивnumsсодержиттолькоцелыечисла.
// • Выможетевернутьиндексывлюбомпорядке.
// • Длякаждогонаборавходныхданныхсуществуетровнооднорешение.
// Входные: new TwoSum([2, 7, 11, 15], 9) → Результат: [0, 1]
// Объяснение:Посколькуnums[0] + nums[1] ==9, мы возвращаем[0, 1].
// Входные: new TwoSum([3, 2, 4], 6)→ Результат: [1, 2]
// Входные: new TwoSum([2, 3, 4], 6)→ Результат: [0, 2]

class TwoSum {
    constructor(arr, target) {
        this.arr = arr;
        this.target = target;
    }

    findIndices() {
        for(let j= 0; j < this.arr.length; j++){
            for (let i = 0; i < this.arr.length; i++) {
                if (i != j) {
                    if (this.target == this.arr[j] + this.arr[i]) {
                        const resArr = [i];
                        resArr.push(j);
                        return resArr;
                    }
                }
            }
        }
    }
}

const twoSum = new TwoSum([2, 7, 11, 15], 9);
console.log(twoSum.findIndices());
