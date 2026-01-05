//  3. На вход подается строка из 2 и более слов. Необходимо все символы пробела
//  заменить на пустую строку. 

const str = `hello word`;

const regex = / /gm;


function fun(str){
    return str.replaceAll(regex, ``);
}

console.log(fun(str));