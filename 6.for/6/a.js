const arr = [1, 'hi', 2, 'hello', 3];

for (let i = 0; i < arr.length; i++) {
if(isNaN(arr[i])){
    console.log(`Строка ${arr[i]}`);
}else{
    console.log(`Число ${arr[i]}`);
}
}