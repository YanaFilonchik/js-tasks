// 9. Функция принимает старт, шаг и количество элементов и выводит последовательность.
// sequence(1)(3)(4); // 👉 1 4 7 10

function sequence(start) {
    return function (shag) {
        return function (number) {
            const arr = [start];
            for (let i = 1, j = shag; i < number; i++, j += 3) {
                start+=shag;
                arr.push(start);
            }
            console.log(arr);
        }
    }
}

sequence(1)(3)(4);