//  6. Объект с brand (Toyota), model (Corolla), year (2000), метод describeCar выводит 
// информацию об авто. 
//  <brand> <model>, <year> года выпуска

const car = {
    brand: `Toyota`,
    model: `Corolla`,
    year: 2000,
    describeCar: function (){
        console.log(`${this.brand} ${this.model}, ${this.year} года выпуска`);
        
    }
}

car.describeCar();