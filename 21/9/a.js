const btn = document.querySelector(`.btn`);

btn.addEventListener(`click`,function(){
    if(btn.style.background == `red`) btn.style = `background: white`;
    else btn.style = `background: red`;
})