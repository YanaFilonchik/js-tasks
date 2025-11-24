// 1.
//  Навходепустойобъект.Выполнитеследующиешаги:
//  • Добавьтесвойствоidсозначением1.
//  • Добавьтесвойствоnameсозначением"udemy".
//  • Изменитезначениесвойстваnameна"hschool".
//  • Удалитесвойствоnameизобъекта.

const obj = {};
obj.id = 1;
console.log(obj);
obj.name = `udemy`;
console.log(obj);
obj.name = `hschool`;
console.log(obj);
delete obj.name;
console.log(obj);