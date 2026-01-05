// 6. Реализуйте класс, который находит полное число метров по заданному числу сантиметров.
// Добавьтепроверкуна вводтолькочисел.
// Входные: 345 →Результат: 3 метров
// Входные: 100 → Результат: 1 метр
// Входные: 99 →Результат: 0 метров
// Входные: 750 →Результат: 7 метров
// Входные: 10 →Результат: 0 метров
// Входные: hi → Результат: Вы ввелине число!


class Metr {
    metrov(number) {
        console.log(Math.floor(number / 100));
    }
}

const metr = new Metr();
try {
    let number = 100;
    if (isNaN(number)) throw new Error(`не число`);
    metr.metrov(number);
    number = `hi`;
    if (isNaN(number)) throw new Error(`не число`);
    metr.metrov(number);
} catch (error) {
    console.log(error);
}


