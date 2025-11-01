const str = prompt();

if (str.endsWith('.com') || str.endsWith('.ru')) {
    console.log(true);
} else {
    console.log(false);
}