const a = prompt();
let res = 0;

if (isNaN(a)) {
    console.log(`Введено не число!`);
} else {
    for (let i = 0; i < a.length; i++){
        res+=+a[i];
    }
    console.log(res);
}