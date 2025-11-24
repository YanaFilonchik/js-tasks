//  10. Навходеобъектсключамиname, age,birthday, значениякоторых–пустыестроки.Необходимо
//  считатьданныесклавиатурыизаполнитьобъектсоответствующимиданными,добавивпроверки
//  наввод.

const obj = {
    name: prompt(),
    age: prompt(),
    birthday: prompt(),
}

for (const key in obj) {
    if(!obj[key]){
        console.log(`Значение ${key} не заполнено`); 
    }
}
