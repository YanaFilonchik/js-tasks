// 4 задача:
// глобально: массив объектов каждый из которых - {name, price}.
// 1-я функция: проверяет товар (name строка, price число > 0).
// 2-я функция: фильтрует товары и находит минимальный и максимальный price

const arr = [{ name: `table`, price: 14 }, { name: `boll`, price: 17 }, { name: `stul`, price: 12 }]

function isTovar(array) {
    return array.every(function (el) {
        return typeof el.name == `string` && typeof el.price == `number` && el.price > 0 ? true : false;
    })
}

function minMaxTovar(array) {
    let min = array[0][`price`];
    let max = array[0][`price`];
    array.forEach((el) => {
        if (min > el[`price`]) min = el[`price`];
        if (max < el[`price`]) max = el[`price`];
    });
    return [min, max];
}

if (isTovar(arr)) {
    const arrPrice = minMaxTovar(arr);
    console.log(`min: ${arrPrice[0]}, max: ${arrPrice[1]}`);

}
else console.log(`error`);

