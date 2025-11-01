const a = +prompt();

if (isNaN(a)) {
    console.log(`Введено не число!`);
} else {
    for (let i = 1; i <= a; i++) {
        if (i % 3 == 0) {
            console.log(i);
        }
    }
}