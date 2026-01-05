const btn = document.querySelector(`.btn`);

btn.addEventListener(`click`, function () {
    try {
        const inputText = document.querySelector(`input`).value;
        if (inputText == ``) throw new Error(`пустая строка`);
        alert(inputText);
    } catch (error) {
        alert(error.message);
    }
})