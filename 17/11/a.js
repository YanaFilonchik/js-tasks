//  1. ЗАДАЧА РЕШЕНА И ПРЕДОСТАВЛЯЕТСЯ В КАЧЕСТВЕ ПРИМЕРА: Создай 
// функцию createCounter(), которая возвращает новую функцию. Каждый вызов 
// увеличивает значение счётчика на 1

function createCounter() {
    let count = 0;
    return function(){
        count++;
        console.log(count);
    }
}

const counter = createCounter();
counter();
counter();
counter();