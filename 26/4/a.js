// 4. Создайте класс Rectangleс полями width и height. Реализуйте метод area(), возвращающий 
// площадь.

class Rectangleс{
    constructor(width, height){
        this.width = width;
        this.height = height;
        this.area();
    }

    area(){
        console.log(this.width * this.height);
    }
}

const rectangle = new Rectangleс(14, 2);