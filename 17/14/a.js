// 9. Создай функцию secretMessage(msg), которая возвращает другую функцию. При 
// вызове она выводит msg.

function secretMessage(str){
    return function(){
        console.log(str);
    }
}

const showSecret = secretMessage(`Это секрет`);
showSecret();