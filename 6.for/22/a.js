// 22. Дан массив с названиями дней недели ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", 
// "Saturday", "Sunday"]. Вам нужно с помощью цикла for пройти по каждому элементу массива и с
//  помощью конструкции switch определить, будний это день или выходной, а затем вывести
//  соответствующуюинформациюнаэкран.
//  Входные: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"] → Результат:
//  Monday - буднийдень
//  Tuesday - буднийдень
//  Wednesday - буднийдень
//  Thursday - буднийдень
//  Friday - буднийдень
//  Saturday - выходнойдень
//  Sunday - выходнойдень

const arr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
        case "Monday":
            console.log(`будний день`);
            break;
        case "Tuesday":
            console.log(`будний день`);
            break;
        case "Wednesday":
            console.log(`будний день`);
            break;
        case "Thursday":
            console.log(`будний день`);
            break;
        case "Friday":
            console.log(`будний день`);
            break;
        case "Saturday":
            console.log(`выходной день`);
            break;
        case "Sunday":
            console.log(`выходной день`);
            break;
    }
}