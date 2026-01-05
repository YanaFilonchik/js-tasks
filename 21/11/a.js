const btn = document.querySelector(`.btn`);

btn.addEventListener(`click`, function(){
    const inputLeft = document.querySelector(`.inputLeft`);
    const inputRight = document.querySelector(`.inputRight`);

    const textLeft = inputLeft.value;
    // alert(textLeft);
    inputLeft.value = inputRight.value;
    inputRight.value = textLeft;
})