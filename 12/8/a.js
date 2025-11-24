//  8. Даныдваобъекта. Создайте новый объект, включив в него только те свойства, которые есть в
//  обоих исходных объектах. Используйте hasOwnProperty для проверки.

const obj1 = {
    id: 1,
    name: `yana`,
    test: 123
};

const obj2 = {
    age: 22,
    name: `yana`
};

const obj3 = {};

for (const key in obj1) {
    if(obj2.hasOwnProperty(key)){
        obj3[key] = obj2[key];
    }
}
console.log(obj3);