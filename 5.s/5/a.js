const str = prompt();

if (isNaN(str)) {
    const str1 = str.trim();
    console.log(str1[0].toUpperCase() + str1.slice(1));
} else {
    console.log('Ошибка ввода');
}