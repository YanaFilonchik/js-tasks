const arr = [`hi`, `hello`, `world`, `yo`];
for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < 5) {
        continue;
    }
    console.log(arr[i]);
}