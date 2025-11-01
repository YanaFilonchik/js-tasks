const str = prompt();

if (isNaN(str)) {
    console.log(str.split(''));
} else if (str % 2 == 0) {
    console.log('Четное число');
} else {
    console.log('Не четное число');
}