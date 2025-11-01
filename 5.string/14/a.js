const a = +prompt();
const b = +prompt();
if (isNaN(a) && isNaN(b)) {
    console.log('Не числа!');
} else if (a === b) {
    console.log('Равны');
    
}else{
    a>b?console.log(a):console.log(b);  
}