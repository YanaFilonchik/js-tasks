// 1.
//  Создайте два “symbol” с одинаковым описанием и сравните их. Выведите результат сравнения в 
// консоль

const symb = Symbol(`asd`);
const symb1 = Symbol(`asd`);

console.log(symb === symb1);