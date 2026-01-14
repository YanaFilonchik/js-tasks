// 2. Создайте класс Student, который будет содержать имя, возраст и массив оценок. Напишите метод
// getAverageGrade(), который возвращает средний баллстудента.
// Входные: Student("Alice", 20, [5, 4, 5, 3, 4]) → Результат: "Alice (20) имеет средний балл 4.2"
// Входные: Student("Bob", 22, [3, 2, 3, 4, 3]) → Результат: "Bob (22) имеет средний балл 3.0"
// Входные: Student("John", 19, [4, 4, 4, 5, 5]) → Результат: "John (19) имеет средний балл 4.4"


//1
/* class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    getAverageGrade() {
        console.log(`${this.name} (${this.age}) имеет средний балл ` + this.grade.reduce((sum, el) => sum += el, 0) / this.grade.length);
    }
}

new Student("Alice", 20, [5, 4, 5, 3, 4]).getAverageGrade(); */

//2
/* class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
        this.getAverageGrade();
    }

    getAverageGrade() {
        console.log(`${this.name} (${this.age}) имеет средний балл ` + this.grade.reduce((sum, el) => sum += el, 0) / this.grade.length);
    }
}

new Student("Alice", 20, [5, 4, 5, 3, 4]); */

//3
/* class Student {
    getAverageGrade(name, age, grade) {
        console.log(`${name} (${age}) имеет средний балл ` + grade.reduce((sum, el) => sum += el, 0) / grade.length);
    }
}

new Student().getAverageGrade("Alice", 20, [5, 4, 5, 3, 4]); */

//4
/* class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    get getAverageGrade() {
        console.log(`${this.name} (${this.age}) имеет средний балл ` + this.grade.reduce((sum, el) => sum += el, 0) / this.grade.length);
    }
}

new Student("Alice", 20, [5, 4, 5, 3, 4]).getAverageGrade; 
 */


//5
class Student {
    name;
    age;
    grade;
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    set name(value) {
        this.name = value;
    }

    set age(value) {
        this.age = value;
    }

    set grade(value) {
        this.grade = value;
    }

    get getAverageGrade() {
        console.log(`${this.name} (${this.age}) имеет средний балл ` + this.grade.reduce((sum, el) => sum += el, 0) / this.grade.length);
    }
}

new Student("Alice", 20, [5, 4, 5, 3, 4]).getAverageGrade; 