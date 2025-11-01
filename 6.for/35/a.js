const arr = [`no`, `yes`, `Apple`];
let flag = false;
for (let i = 0; i < arr.length; i++) {
    if(arr[i][0] == arr[i][0].toUpperCase()){
        console.log(arr[i]);  
        flag = true; 
        break;
    }
}
if(flag == false){
    console.log(`Not found`);
}
