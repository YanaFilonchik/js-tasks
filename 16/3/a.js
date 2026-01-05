// 3. Объект с orderId и status, метод printStatus, выводит: "Заказ <orderId>: <status>".

const order = {
    orderId: 1,
    status: `new`,
    printStatus: function (){
        console.log(`Заказ ${this.orderId}: ${this.status}`);
        
    }
}

order.printStatus();