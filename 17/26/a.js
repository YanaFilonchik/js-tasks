// 10. Замыкание. Напиши функцию, которая возвращает функцию-счётчик. При каждом вызове увеличивает и выводит число.

function counter(){
    let count = 0;
    return function(){
        console.log(count++);
    }
}

const func = counter();
func();
func();
func();