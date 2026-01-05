// 5. На вход подается строка в виде url. Необходимо написать регулярное выражение 
// для данной строки. Если же строка подходит под регулярное выражение, то 
// вывести булевое true, в противном случае бросить исключение и обработать


const regex = /http:\/\/[\w\.\/]+/gm;
const str = `http://annapl6z.beget.tech`;

function validUrl(url){
    return regex.test(url);
}

console.log(validUrl(str));
