const a = prompt();

if (isNaN(a)) {
    console.log(false);
} else {
    console.log(true);
}

isNaN(a) ? console.log(false) : console.log(true);