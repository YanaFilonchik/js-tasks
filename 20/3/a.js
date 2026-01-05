// 3. Дан массив. Вывести те элементы массива, id которых– четное значение. Добавить
// проверки
const arr = [
    { "id": 1, "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
    { "id": 2, "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
    { "id": 3, "label": "SQL", "category": "programmingLanguages", "priority": 2 },
    { "id": 4, "label": "Java", "category": "programmingLanguages", "priority": 3 },
    { "id": 5, "label": "GO", "category": "programmingLanguages", "priority": 3 }
]

function isValid(number) {
    if (isNaN(number)) throw Error(`Не число`);
    if (number < 0) throw Error(`Индекс отрицательный`);
    return true;
}

function main() {
    try {
        arr.forEach(el => {
            if (isValid(el.id)) console.log(el.id);
        })
    }
    catch (error) {
        console.log(error);
    }
}

main();