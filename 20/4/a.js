// 4. На вход подается число n– количество элементов массива. Необходимо заполнить массив
// случайными элементами вдиапазоне 0<n<100. Добавить проверки наввод n.

function newArr(n) {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() * 100 + 1));
    }
    return arr;
}

function isValidNumber(n) {
    if (isNaN(n)) throw new Error(`Не число`);
    if (n < 0) throw new Error(`Число меньше 0`);
    if (n > 100) throw new Error(`Число больше 100`);
}

function main() {
    try {
        //const n = +prompt();
        const n = 14;
        isValidNumber(n);
        const arrey = newArr(n);
        console.log(arrey);
    } catch (error) {
        console.log(error);
    }
}

main();