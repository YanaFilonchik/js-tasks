// 7. На вход подается число. Необходимо каждое значение возвести в степень индекса и
//  вычислить сумму. 12345 = 10+21+32+43+54

const numStr = `12345`;
const arr = numStr.split(``);
const res = arr.reduce(function (sum, el, i) {
    return sum+= el**i;
},0)
console.log(res);