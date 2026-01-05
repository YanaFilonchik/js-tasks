const btn = document.querySelector(`.btn`);

btn.addEventListener(`click`,function(){
    const inputText = document.querySelector(`input`);   
    alert(inputText.value);
})