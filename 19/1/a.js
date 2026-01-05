const str = prompt();

function valid(str){
    return /^[0-9]+$/gm.test(str);
}

console.log(valid(str));