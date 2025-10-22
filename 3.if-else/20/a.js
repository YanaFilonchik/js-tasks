const n = +prompt();

if (n <= 2) {
    console.log(n * 10.5, 'человеческих лет');
} else {
    console.log((n - 2) * 4 + 2 * 10.5, 'человеческих лет');
} 