// 18. Написать функцию, принимающую в параметрах дату в формат “xx/xx/xxxx”. Функция должна 
// преобразовать строку в формат “xxxx-xx-xx”.

const dateFormat = (strDate) => strDate.split(`/`).reverse().join(`-`);

console.log(dateFormat(prompt()));
