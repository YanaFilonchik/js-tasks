// 17. Напишите функцию, которая принимает любое количество строковых аргументов и возвращает
//  массивэтихстрок вверхнемрегистре. Используйтеоператорrest.
//  Входные: toUpperCase('apple', 'banana', 'cherry') → Результат: ['APPLE', 'BANANA', 'CHERRY']
//  Входные: toUpperCase('dog', 'cat') → Результат: ['DOG', 'CAT']

function toUpperCase(...arr) {
    return arr.map(function (el){
        return el.toUpperCase();
    });
}

console.log(toUpperCase('apple', 'banana', 'cherry'));
