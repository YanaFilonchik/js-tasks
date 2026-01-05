// 8. Реализуйте класс Validator. У него будет метод isEmail параметром принимает строку и проверяет, 
// является ли она корректным емейлом или нет. Если является - возвращает true, если не является 
// то false.

class Validator{
    email = ``;
    constructor(str){
        this.email = str;
    }
    isEmail(){
        const regex = /[\w]+@[\w]+\.[\w]+/;
        console.log(regex.test(this.email));
    }
}

const validator = new Validator(`qqq@ty.ru`);
validator.isEmail();