// 2. На входе массив значений. Необходимо его обработать. Если в массиве есть хотя бы 1
// строка, бросить исключение.

function isValidArr(array){
    array.forEach(el => {
        if(isNaN(el)) throw Error(`Элемент является строкой`);
        if(typeof el === `string`) throw Error(`Элемент является строкой`);
    });
}

function main(){
    const array = [1, 4, 7, 8];
    try {
        isValidArr(array);
        console.log(array);
    } catch (error) {
        console.log(error);
    }
}

main();