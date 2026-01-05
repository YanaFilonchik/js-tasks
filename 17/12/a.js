//  Функция greetUser(name) должна возвращать функцию, которая приветствует 
// пользователя по имени.

function greetUser(name){
    return function(){
        console.log(`Привет, ${name}`); 
    }
}

const greetAnna = greetUser(`Анна`);
greetAnna();