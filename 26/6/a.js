// 6. Создайте класс Movie с полями title, year и rating. Добавьте метод isPopular(), возвращающий true, 
// если рейтинг выше 8. Вызовите метод из нескольких экземпляров классов с разными значениями 
// rating. 

class Movie {
    constructor(title, year, rating) {
        this.title = title;
        this.year = year;
        this.rating = rating;
    }
    isPopular() {
        return this.rating >= 8 ? true : false;
    }
}

const movie1 = new Movie(`test1`, 2025, 8);
const movie2 = new Movie(`test2`, 2021, 6);
const movie3 = new Movie(`test3`, 2023, 10);

console.log(movie1.isPopular());
console.log(movie2.isPopular());
console.log(movie3.isPopular());