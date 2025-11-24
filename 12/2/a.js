//  2. Дан объект и переменная с названием одного из свойств. Используйте hasOwnProperty,
//  чтобы проверить, существует ли это свойство в объекте.

const str = `name`;

const obj = {
    age: 22,
    name: `yana`
}

console.log(obj.hasOwnProperty(str));
