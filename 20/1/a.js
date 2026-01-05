// 1.
// На входе значение. Необходимо его обработать. Если это число и оно не является четным,
// бросить исключение


function isValid(str){
    if(isNaN(str)) throw Error(`Введено не число`);
    if(+str%2!=0) throw Error(`Число не четное`);
}

function main(){
    const value = +prompt();
    try {
        isValid(value);
        console.log(value);
    } catch (error) {
        console.log(error);
    }finally{
        console.log(value);
    }
}

main();