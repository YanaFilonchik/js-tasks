const str = prompt();

if(isNaN(str)){
    console.log(str.toLowerCase().trim(), 'Длинна: ', str.trim().length);
    
} else{
    console.log('введено число');
}