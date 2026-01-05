// 7. Каррирование. Напиши три вложенные функции, которые принимают имя, возраст и город, и выводят всё одной строкой.

function formatStr(name){
    return function(age){
        return function(sity){
            console.log(`${name} ${age} ${sity}`);   
        }
    }
}

formatStr(`Яна`)(22)(`Минск`);