//  10. Есть объект с информацией о пользователе. С помощью деструктуризации получите имя и
//  возраст, и выведите их.

const obj = {
    name: `yana`,
    age: 22
}

const {name, age} = obj;
console.log(name);
console.log(age);