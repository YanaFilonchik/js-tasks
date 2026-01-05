// 4. Объект с width, height и методом getArea, который выводит площадь.

const obj = {
    width: 10,
    height: 20,
    getArea: function () {
        console.log(`Площадь: ${this.width * this.height}`);
    }
}

obj.getArea();