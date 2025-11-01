const a = +prompt();
const b = +prompt();

if(isNaN(a)&&isNaN(b)){
    console.log('Не числа!');
} else{
    a%b===0?console.log('Кратно'):console.log('Не кратно');
}