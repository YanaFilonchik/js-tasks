const arr = [`go`, `keep`, `STOP`, `wait`];
for (let i = 0; i < arr.length; i++){
    if(arr[i].toLowerCase() == `stop`){
        break;
    }
    console.log(arr[i]);
}
