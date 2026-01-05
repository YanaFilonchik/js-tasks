//  8. Дана строка состоящая из чисел, букв, специальных символов. Необходимо 
// оставить в строке только буквенные символы используя регулярные выражения. 
// Если же длина исходной строки изменилась, вывести true, в противном случае 
// бросить исключение и обработать

const regex = /[^A-Za-zА-Яа-я\ ]/gm;

const str = `tyfd tg567 jhdb77`;

function validSrt(str) {
    return str.replaceAll(regex, ``);
}

if(str.length != validSrt(str)) console.log(false);
else console.log(true);