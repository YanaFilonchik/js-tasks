const btnOff = document.querySelector(`.btnOff`);
const btnOn = document.querySelector(`.btnOn`);
const input = document.querySelector(`input`);

btnOff.addEventListener(`click`, function(){
    input.disabled = false;
})

btnOn.addEventListener(`click`, function(){
    input.disabled = true;
})