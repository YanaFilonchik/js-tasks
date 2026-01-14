// 7. Создайте класс Student с полями nameи массивом оценок grades. Реализуйте метод 
// getAverageGrade() для подсчёта среднего балла.

class Student {
    constructor(name, arrGrades) {
        this.name = name;
        this.grades = arrGrades;
    }
    getAverageGrade() {
        const resArr = this.grades.reduce(function (sum, el) {
            return sum += el;
        }, 0);
        console.log(resArr / this.grades.length);
    }
}

const student = new Student(`yana`, [8, 9, 7, 10]);
student.getAverageGrade();