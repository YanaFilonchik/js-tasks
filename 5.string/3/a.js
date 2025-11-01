const str = prompt();
const a = str[str.length - 1];
if (a === '!') {
    console.log(true);
} else {
    console.log(false);
}

a === '!' ? console.log(true) : console.log(false);