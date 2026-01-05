// 2. Создайте объект с firstName, lastName и методом 
// fullName, который выводит полное имя.


const person = {
    firstName: `Иван`,
    lastName: `Сидоров`,
    fullname: function () {
        console.log(`${this.firstName} ${this.lastName}`);
        
    }
}

person.fullname();