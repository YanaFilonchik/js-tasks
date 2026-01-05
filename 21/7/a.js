const btn = document.querySelector(`.btn`);

btn.addEventListener(`click`, function () {
    try {
        document.querySelector(`.result`).textContent = resultNumber();
    } catch (error) {
        alert(error);
    }

})

function resultNumber() {
    const number = document.querySelector(`input`).value;
    if (isNaN(number)) throw new Error(`не число`);
    return number*2;
}