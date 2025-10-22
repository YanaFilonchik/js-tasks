const a = +prompt();
const b = +prompt();

if (a % b == 0){
    console.log('Делится, результат = ', a/b);
} else{
    console.log('Делится с остатком, остаток = ', a%b );
}