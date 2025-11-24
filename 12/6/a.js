//  6. Дан объект и строка. Используя Object.keys(), проверьте, существует ли в объекте свойство с
//  таким именем. Выведите trueили false.

const obj = {
    id: 1,
    name: `yana`
}

const arr = Object.keys(obj);
console.log(arr.includes(`name`));
