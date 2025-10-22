const a = +prompt();

let sqtr = Math.sqrt(a);
if (Number.isInteger(sqtr)){
    console.log(sqtr);
}else{
    console.log(sqtr.toFixed(2));
}