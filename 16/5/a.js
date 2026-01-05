//  5. Объект user с role (admin / user) и методом checkAccess, который выводит разный 
// текст в зависимости от роли.
//  Сообщениедля admin-> <name>: полный доступ
//  Сообщение для user-> <name>: ограниченный доступ

const user ={
    role: `admin`,
    name: `yana`,
    checkAccess: function (){
        if(this.role == `admin`) console.log(`${this.role}-> ${this.name}: полный доступ`);
        else if (this.role == `user`) console.log(`${this.role}-> ${this.name}: ограниченный доступ`);
    }
}

user.checkAccess();