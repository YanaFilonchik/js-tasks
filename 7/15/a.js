let a = [1, 2, 3, 4];
let b = [3, 4, 5, 6];
for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
        if (a[i] === b[j]) {
            console.log(b[j]);
            break;
        }
    }
}